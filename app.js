/* Kuwait Traffic Signs Quiz — vanilla JS, no build step. */
(() => {
  'use strict';

  const CATS = [
    { id: 'warning',     fa: 'علائم هشدار',               en: 'Warning',               icon: '507' },
    { id: 'prohibitory', fa: 'علائم ممنوعیت و حق تقدم',   en: 'Prohibitory & Priority', icon: '421' },
    { id: 'mandatory',   fa: 'علائم اجباری (آبی)',        en: 'Mandatory',             icon: '408' },
    { id: 'info',        fa: 'علائم اطلاعاتی و خدماتی',   en: 'Information & Services', icon: '318' },
    { id: 'plates',      fa: 'تابلوهای مکمل و نوشته‌دار', en: 'Supplementary Plates',  icon: '527' },
    { id: 'works',       fa: 'عملیات جاده‌ای و موقت',     en: 'Roadworks & Temporary', icon: '559' },
    { id: 'motorway',    fa: 'بزرگراه',                   en: 'Motorway',              icon: '444' },
  ];
  const byId = Object.fromEntries(SIGNS.map(s => [s.id, s]));
  const catById = Object.fromEntries(CATS.map(c => [c.id, c]));

  /* ---------- storage ---------- */
  const KEY = 'kw-signs-v1';
  const store = {
    load() {
      try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; }
    },
    save(d) { try { localStorage.setItem(KEY, JSON.stringify(d)); } catch {} },
  };
  let DB = store.load();
  DB.stats = DB.stats || {};      // id -> {a: attempts, w: wrong, s: correct streak, t: last time}
  DB.settings = Object.assign({ lang: 'en+fa', count: 20, autoNext: false }, DB.settings || {});
  const persist = () => store.save(DB);

  const st = id => DB.stats[id] || { a: 0, w: 0, s: 0, t: 0 };
  const errRate = id => { const x = st(id); return x.a ? x.w / x.a : 0; };
  // Weakness score for review ordering: smoothed error rate, boosted by a broken streak
  const weakness = id => {
    const x = st(id);
    if (!x.w) return 0;
    const smoothed = (x.w + 1) / (x.a + 2);
    const streakPenalty = Math.max(0, 3 - x.s) / 3;  // 1 when just missed, 0 after 3 correct in a row
    return smoothed * 0.65 + streakPenalty * 0.35;
  };
  const reviewPool = () => SIGNS.filter(s => st(s.id).w > 0 && st(s.id).s < 3)
                                .sort((a, b) => weakness(b.id) - weakness(a.id));
  const mastered = list => list.filter(s => { const x = st(s.id); return x.a && x.s >= 2; }).length;

  function record(id, correct) {
    const x = Object.assign({ a: 0, w: 0, s: 0, t: 0 }, DB.stats[id]);
    x.a++; x.t = Date.now();
    if (correct) x.s++; else { x.w++; x.s = 0; }
    DB.stats[id] = x; persist();
  }

  /* ---------- helpers ---------- */
  const $ = s => document.querySelector(s);
  const app = $('#app');
  const fa = n => String(n).replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.random() * (i + 1) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const pctClass = p => p >= 0.5 ? 'hi' : p >= 0.2 ? 'mid' : 'lo';

  function label(s) {
    const L = DB.settings.lang;
    if (L === 'en') return `<span class="main en">${esc(s.en)}</span>`;
    if (L === 'fa') return `<span class="main">${esc(s.fa)}</span>`;
    if (L === 'ar') return `<span class="main ar" lang="ar">${esc(s.ar)}</span>`;
    if (L === 'en+ar') return `<span class="en">${esc(s.en)}</span><span class="sub ar" lang="ar">${esc(s.ar)}</span>`;
    return `<span class="en">${esc(s.en)}</span><span class="sub">${esc(s.fa)}</span>`;
  }
  // The "answer text" used to guarantee distractors never look identical to the correct answer
  const answerKey = s => ({ en: s.en, fa: s.fa, ar: s.ar, 'en+ar': s.en, 'en+fa': s.en }[DB.settings.lang] || s.en);

  function pickOptions(sign) {
    const key = answerKey(sign);
    const taken = new Set([key]);
    const out = [sign];
    const same = shuffle(SIGNS.filter(s => s.cat === sign.cat && s.id !== sign.id));
    const other = shuffle(SIGNS.filter(s => s.cat !== sign.cat));
    for (const s of [...same, ...other]) {
      if (out.length === 4) break;
      const k = answerKey(s);
      if (taken.has(k)) continue;
      taken.add(k); out.push(s);
    }
    return shuffle(out);
  }

  /* ---------- navigation ---------- */
  const homeBtn = $('#homeBtn');
  function setTitle(t, showBack) { $('#title').textContent = t; homeBtn.hidden = !showBack; }
  homeBtn.onclick = () => { if (!session || session.done || confirm('از این جلسه خارج می‌شوی؟')) home(); };

  /* ---------- HOME ---------- */
  function home() {
    session = null;
    setTitle('علائم رانندگی کویت', false);
    const total = SIGNS.length;
    const seen = SIGNS.filter(s => st(s.id).a).length;
    const weak = reviewPool().length;
    const allAttempts = SIGNS.reduce((n, s) => n + st(s.id).a, 0);
    const allWrong = SIGNS.reduce((n, s) => n + st(s.id).w, 0);
    const acc = allAttempts ? Math.round(100 * (1 - allWrong / allAttempts)) : null;

    app.innerHTML = `
      <section class="hero">
        <h2>تمرین علائم راهنمایی و رانندگی</h2>
        <p>${fa(total)} علامت در ${fa(CATS.length)} دسته — مطابق سایت ادارهٔ کل راهنمایی و رانندگی کویت</p>
        <div class="meter">
          <div><b>${fa(seen)}</b><span>دیده‌شده از ${fa(total)}</span></div>
          <div><b>${acc === null ? '—' : fa(acc) + '٪'}</b><span>دقت کل</span></div>
          <div><b>${fa(mastered(SIGNS))}</b><span>تسلط</span></div>
        </div>
      </section>
      <div class="big-actions">
        <button class="action review" id="goReview" ${weak ? '' : 'disabled'}>
          <b>مرور اشتباه‌ها</b><span>${weak ? fa(weak) + ' علامت ضعیف، از بیشترین اشتباه' : 'هنوز اشتباهی ثبت نشده'}</span>
        </button>
        <button class="action mix" id="goMix"><b>تمرین میکس</b><span>همهٔ دسته‌ها با هم</span></button>
        <button class="action wide" id="goStats"><span><b style="color:var(--ink);font-size:15px">آمار و درصد اشتباه هر علامت</b></span><span>‹</span></button>
      </div>
      <div class="section-title">تمرین بر اساس دسته</div>
      <div class="cats">
        ${CATS.map(c => {
          const list = SIGNS.filter(s => s.cat === c.id);
          const m = mastered(list);
          return `<button class="cat" data-cat="${c.id}">
            <img src="${byId[c.icon].img}" alt="">
            <span class="txt"><b>${c.fa}</b><small><span class="en">${c.en}</span> · ${fa(list.length)} علامت · تسلط ${fa(m)}</small>
            <span class="bar"><i style="width:${list.length ? 100 * m / list.length : 0}%"></i></span></span>
          </button>`;
        }).join('')}
      </div>
      <p class="foot">پیشرفتت فقط روی همین مرورگر ذخیره می‌شود.</p>`;
    $('#goMix').onclick = () => start('mix');
    $('#goReview').onclick = () => start('review');
    $('#goStats').onclick = () => stats('all');
    app.querySelectorAll('.cat').forEach(b => b.onclick = () => start('cat', b.dataset.cat));
    window.scrollTo(0, 0);
  }

  /* ---------- SESSION ---------- */
  let session = null;

  function start(mode, cat) {
    const n = +DB.settings.count || Infinity;
    let pool, title;
    if (mode === 'review') {
      pool = reviewPool();
      title = 'مرور اشتباه‌ها';
      pool = pool.slice(0, n);               // weakest first, keep order
    } else {
      pool = mode === 'cat' ? SIGNS.filter(s => s.cat === cat) : SIGNS.slice();
      title = mode === 'cat' ? catById[cat].fa : 'تمرین میکس';
      // Unseen and weaker signs come up a bit more often, the rest random
      const w = s => Math.random() * (1 + weakness(s.id) + (st(s.id).a ? 0 : 0.3));
      pool = pool.map(s => [w(s), s]).sort((a, b) => b[0] - a[0]).map(p => p[1]);
      pool = shuffle(pool.slice(0, n));
    }
    if (!pool.length) return home();
    session = { mode, cat, title, queue: pool.map(s => s.id), i: 0, right: 0, answered: 0,
                wrongIds: [], requeued: new Set(), done: false };
    setTitle(title, true);
    question();
  }

  function question() {
    const s = session;
    if (s.i >= s.queue.length) return results();
    const sign = byId[s.queue[s.i]];
    const opts = pickOptions(sign);
    s.current = { sign, opts, answered: false };
    const x = st(sign.id);
    app.innerHTML = `
      <div class="qhead"><span>${fa(s.i + 1)} / ${fa(s.queue.length)}</span>
        <span class="bar"><i style="width:${100 * s.i / s.queue.length}%"></i></span>
        <span>✓ ${fa(s.right)}</span></div>
      <div class="card">
        <div class="sign-wrap"><img src="${sign.img}" alt="علامت"></div>
        <div class="sign-meta"><span class="chip">${catById[sign.cat].fa}</span>
          <span>${x.a ? 'اشتباه قبلی: ' + fa(Math.round(100 * errRate(sign.id))) + '٪ از ' + fa(x.a) + ' بار' : 'علامت جدید'}</span></div>
        <div class="q">این علامت چه معنایی دارد؟</div>
        <div class="opts">
          ${opts.map((o, k) => `<button class="opt" data-id="${o.id}"><span class="k">${k + 1}</span><span class="lbl">${label(o)}</span></button>`).join('')}
        </div>
        <div id="fb"></div>
      </div>`;
    app.querySelectorAll('.opt').forEach(b => b.onclick = () => answer(b.dataset.id));
    window.scrollTo(0, 0);
  }

  function answer(id) {
    const s = session, c = s.current;
    if (c.answered) return;
    c.answered = true;
    const ok = id === c.sign.id;
    s.answered++;
    record(c.sign.id, ok);
    if (ok) s.right++;
    else {
      if (!s.wrongIds.includes(c.sign.id)) s.wrongIds.push(c.sign.id);
      // In review mode, a missed sign comes back again later in the same session (once)
      if (s.mode === 'review' && !s.requeued.has(c.sign.id)) {
        s.requeued.add(c.sign.id);
        s.queue.splice(Math.min(s.queue.length, s.i + 4), 0, c.sign.id);
      }
    }
    app.querySelectorAll('.opt').forEach(b => {
      b.disabled = true;
      if (b.dataset.id === c.sign.id) b.classList.add('correct');
      else if (b.dataset.id === id) b.classList.add('wrong');
      else b.classList.add('dim');
    });
    const sg = c.sign;
    $('#fb').innerHTML = `
      <div class="feedback ${ok ? 'ok' : 'bad'}">
        <b>${ok ? 'درست! ✓' : 'اشتباه ✗'}</b> — کد علامت <span class="en">${esc(sg.id)}</span>
        <div class="names"><span class="en">${esc(sg.en)}</span><span>${esc(sg.fa)}</span><span class="ar" lang="ar">${esc(sg.ar)}</span></div>
      </div>
      <button class="btn primary block" id="nextBtn">${s.i + 1 >= s.queue.length ? 'دیدن نتیجه' : 'سؤال بعد'}</button>`;
    $('#nextBtn').onclick = next;
    $('#nextBtn').focus({ preventScroll: true });
    $('#fb').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    if (ok && DB.settings.autoNext) s.timer = setTimeout(next, 900);
  }

  function next() {
    clearTimeout(session.timer);
    session.i++;
    question();
  }

  function results() {
    const s = session; s.done = true;
    const pct = s.answered ? Math.round(100 * s.right / s.answered) : 0;
    const weakLeft = reviewPool().length;
    app.innerHTML = `
      <div class="card result">
        <div class="score">${fa(pct)}٪</div>
        <p>${fa(s.right)} درست از ${fa(s.answered)} جواب — ${esc(s.title)}</p>
        <div class="row-btns">
          <button class="btn primary" id="again">دوباره</button>
          ${weakLeft ? `<button class="btn ghost" id="rev">مرور اشتباه‌ها (${fa(weakLeft)})</button>` : ''}
        </div>
        ${s.wrongIds.length ? `<div class="section-title" style="margin-top:18px;text-align:right">اشتباه‌های این جلسه</div>
          <div class="mist">${s.wrongIds.map(id => row(byId[id])).join('')}</div>` : '<p style="margin-top:14px">بدون اشتباه! 👏</p>'}
        <button class="btn ghost block" id="toHome">بازگشت به خانه</button>
      </div>`;
    $('#again').onclick = () => start(s.mode, s.cat);
    if ($('#rev')) $('#rev').onclick = () => start('review');
    $('#toHome').onclick = home;
    window.scrollTo(0, 0);
  }

  function row(sg) {
    const x = st(sg.id), p = errRate(sg.id);
    return `<div class="mrow"><img src="${sg.img}" alt="">
      <div class="t"><span class="en">${esc(sg.en)}</span>${esc(sg.fa)}</div>
      <div class="pct ${pctClass(p)}" title="${fa(x.w)} اشتباه از ${fa(x.a)}">${x.a ? fa(Math.round(100 * p)) + '٪' : '—'}</div></div>`;
  }

  /* ---------- STATS ---------- */
  function stats(filter) {
    session = null;
    setTitle('آمار علائم', true);
    let list = SIGNS.filter(s => filter === 'all' || s.cat === filter);
    const tried = list.filter(s => st(s.id).a).sort((a, b) => errRate(b.id) - errRate(a.id) || st(b.id).w - st(a.id).w);
    const untried = list.filter(s => !st(s.id).a);
    app.innerHTML = `
      <div class="filters">
        <button data-f="all" class="${filter === 'all' ? 'on' : ''}">همه</button>
        ${CATS.map(c => `<button data-f="${c.id}" class="${filter === c.id ? 'on' : ''}">${c.fa}</button>`).join('')}
      </div>
      <div class="section-title">مرتب‌شده بر اساس درصد اشتباه</div>
      ${tried.length ? `<div class="mist">${tried.map(row).join('')}</div>` : '<div class="empty">هنوز در این دسته تمرینی ثبت نشده.</div>'}
      ${untried.length ? `<div class="section-title" style="margin-top:18px">تمرین‌نشده (${fa(untried.length)})</div>
        <div class="mist">${untried.map(row).join('')}</div>` : ''}`;
    app.querySelectorAll('.filters button').forEach(b => b.onclick = () => stats(b.dataset.f));
    window.scrollTo(0, 0);
  }

  /* ---------- keyboard ---------- */
  document.addEventListener('keydown', e => {
    if (!session || session.done || document.querySelector('dialog[open]')) return;
    const c = session.current;
    if (!c) return;
    if (!c.answered && /^[1-4]$/.test(e.key)) {
      const o = c.opts[+e.key - 1]; if (o) answer(o.id);
    } else if (c.answered && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault(); next();
    }
  });

  /* ---------- settings ---------- */
  const dlg = $('#settings');
  $('#settingsBtn').onclick = () => {
    $('#optLang').value = DB.settings.lang;
    $('#qCount').value = String(DB.settings.count);
    $('#autoNext').checked = !!DB.settings.autoNext;
    dlg.showModal();
  };
  $('#optLang').onchange = e => { DB.settings.lang = e.target.value; persist(); };
  $('#qCount').onchange = e => { DB.settings.count = +e.target.value; persist(); };
  $('#autoNext').onchange = e => { DB.settings.autoNext = e.target.checked; persist(); };
  dlg.addEventListener('close', () => { if (!session) home(); });
  $('#resetBtn').onclick = () => {
    if (confirm('همهٔ آمار و درصد اشتباه‌ها پاک شود؟')) { DB.stats = {}; persist(); dlg.close(); home(); }
  };
  $('#exportBtn').onclick = () => {
    const blob = new Blob([JSON.stringify(DB, null, 1)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = 'traffic-signs-progress.json'; a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  };
  $('#importBtn').onclick = () => $('#importFile').click();
  $('#importFile').onchange = async e => {
    const f = e.target.files[0]; if (!f) return;
    try {
      const d = JSON.parse(await f.text());
      if (!d.stats) throw 0;
      DB = { stats: d.stats, settings: Object.assign(DB.settings, d.settings || {}) };
      persist(); dlg.close(); home(); alert('پیشرفت وارد شد.');
    } catch { alert('فایل معتبر نیست.'); }
    e.target.value = '';
  };

  home();
})();

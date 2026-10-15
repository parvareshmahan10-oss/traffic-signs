// Kuwait traffic signs — source: General Traffic Department (moi.gov.kw)
const SIGNS = [
 {
  "id": "500",
  "cat": "warning",
  "en": "Cross Road Ahead",
  "fa": "تقاطع چهارراه در پیش",
  "ar": "أمامك تقاطع طرق",
  "img": "signs/500.png"
 },
 {
  "id": "501L",
  "cat": "warning",
  "en": "Side Road Ahead",
  "fa": "راه فرعی در پیش",
  "ar": "أمامك طريق جانبي",
  "img": "signs/501L.png"
 },
 {
  "id": "502R",
  "cat": "warning",
  "en": "T-Junction Ahead",
  "fa": "تقاطع سه‌راه (T) در پیش",
  "ar": "أمامك تقاطع على شكل T",
  "img": "signs/502R.png"
 },
 {
  "id": "503R",
  "cat": "warning",
  "en": "Consecutive Junctions Ahead",
  "fa": "تقاطع‌های پشت سر هم در پیش",
  "ar": "تفرعات متتالية",
  "img": "signs/503R.png"
 },
 {
  "id": "505R",
  "cat": "warning",
  "en": "Merging Traffic Ahead (side road)",
  "fa": "ادغام ترافیک از راه فرعی",
  "ar": "أمامك نقطة اندماج المرور",
  "img": "signs/505R.png"
 },
 {
  "id": "506R",
  "cat": "warning",
  "en": "Merging Traffic Ahead (slip road)",
  "fa": "ادغام ترافیک از راه مورب",
  "ar": "أمامك نقطة اندماج المرور",
  "img": "signs/506R.png"
 },
 {
  "id": "507",
  "cat": "warning",
  "en": "Roundabout Ahead",
  "fa": "میدان در پیش",
  "ar": "أمامك دوار",
  "img": "signs/507.png"
 },
 {
  "id": "509L",
  "cat": "warning",
  "en": "Bend Ahead",
  "fa": "پیچ در پیش",
  "ar": "أمامك منحنى",
  "img": "signs/509L.png"
 },
 {
  "id": "510R",
  "cat": "warning",
  "en": "Double Bends Ahead",
  "fa": "پیچ‌های پی‌درپی در پیش",
  "ar": "أمامك التواءات",
  "img": "signs/510R.png"
 },
 {
  "id": "512",
  "cat": "warning",
  "en": "Road Narrows on Both Sides",
  "fa": "باریک شدن جاده از دو طرف",
  "ar": "الطريق يضيق أمامك",
  "img": "signs/512.png"
 },
 {
  "id": "513L",
  "cat": "warning",
  "en": "Road Narrows on Left Side",
  "fa": "باریک شدن جاده از سمت چپ",
  "ar": "يضيق الطريق من الجانب الأيسر",
  "img": "signs/513L.png"
 },
 {
  "id": "514",
  "cat": "warning",
  "en": "End of Dual Carriageway",
  "fa": "پایان راه دوطرفهٔ جداشده",
  "ar": "أمامك نهاية طريق مزدوج",
  "img": "signs/514.png"
 },
 {
  "id": "515",
  "cat": "warning",
  "en": "Two-Way Traffic Ahead",
  "fa": "ترافیک دوطرفه در پیش",
  "ar": "أمامك المرور في اتجاهين",
  "img": "signs/515.png"
 },
 {
  "id": "517",
  "cat": "warning",
  "en": "Overhead Electric Cables",
  "fa": "کابل برق هوایی",
  "ar": "كابلات كهربائية علوية",
  "img": "signs/517.png"
 },
 {
  "id": "519",
  "cat": "warning",
  "en": "Gated Railway Crossing Ahead",
  "fa": "تقاطع راه‌آهن با راه‌بند",
  "ar": "بوابة تقاطع قطارات",
  "img": "signs/519.png"
 },
 {
  "id": "520",
  "cat": "warning",
  "en": "Ungated Railway Crossing Ahead",
  "fa": "تقاطع راه‌آهن بدون راه‌بند",
  "ar": "أمامك تقاطع قطارات بدون بوابة",
  "img": "signs/520.png"
 },
 {
  "id": "521",
  "cat": "warning",
  "en": "Ungated Railway Crossing – Single Track",
  "fa": "محل تقاطع راه‌آهن بدون راه‌بند – یک خط",
  "ar": "موقع لتقاطع قطار بدون بوابة – خط مفرد",
  "img": "signs/521.png"
 },
 {
  "id": "522",
  "cat": "warning",
  "en": "Ungated Railway Crossing – Multiple Tracks",
  "fa": "محل تقاطع راه‌آهن بدون راه‌بند – چند خط",
  "ar": "موقع لتقاطع قطار بدون بوابة – خطوط متعددة",
  "img": "signs/522.png"
 },
 {
  "id": "523R",
  "cat": "warning",
  "en": "Railway Crossing Distance Marker – 1 bar (nearest)",
  "fa": "نشانگر فاصله تا تقاطع راه‌آهن – یک خط (نزدیک‌ترین)",
  "ar": "بعد المسافة عن تقاطع القطار",
  "img": "signs/523R.png"
 },
 {
  "id": "524R",
  "cat": "warning",
  "en": "Railway Crossing Distance Marker – 2 bars",
  "fa": "نشانگر فاصله تا تقاطع راه‌آهن – دو خط",
  "ar": "بعد المسافة عن تقاطع القطار",
  "img": "signs/524R.png"
 },
 {
  "id": "525R",
  "cat": "warning",
  "en": "Railway Crossing Distance Marker – 3 bars (farthest)",
  "fa": "نشانگر فاصله تا تقاطع راه‌آهن – سه خط (دورترین)",
  "ar": "بعد المسافة عن تقاطع القطار",
  "img": "signs/525R.png"
 },
 {
  "id": "526",
  "cat": "warning",
  "en": "Beware Children",
  "fa": "مراقب کودکان باشید",
  "ar": "انتبه أطفال",
  "img": "signs/526.png"
 },
 {
  "id": "529",
  "cat": "warning",
  "en": "Traffic Signals Ahead",
  "fa": "چراغ راهنمایی در پیش",
  "ar": "أمامك إشارة ضوئية",
  "img": "signs/529.png"
 },
 {
  "id": "530",
  "cat": "warning",
  "en": "Signals Out of Order",
  "fa": "چراغ راهنمایی خراب است",
  "ar": "إشارة ضوئية عاطلة",
  "img": "signs/530.png"
 },
 {
  "id": "531",
  "cat": "warning",
  "en": "Pedestrian Crossing Ahead",
  "fa": "گذرگاه عابر پیاده در پیش",
  "ar": "أمامك معبر للمشاة",
  "img": "signs/531.png"
 },
 {
  "id": "532",
  "cat": "warning",
  "en": "Beware Animals",
  "fa": "مراقب حیوانات باشید",
  "ar": "انتبه حيوانات",
  "img": "signs/532.png"
 },
 {
  "id": "533",
  "cat": "warning",
  "en": "Hump Bridge Ahead",
  "fa": "پل برآمده (قوزدار) در پیش",
  "ar": "أمامك جسر على شكل ربوة",
  "img": "signs/533.png"
 },
 {
  "id": "534",
  "cat": "warning",
  "en": "Open or Swing Bridge Ahead",
  "fa": "پل متحرک یا بازشو در پیش",
  "ar": "أمامك فتحة أو جسر متحرك",
  "img": "signs/534.png"
 },
 {
  "id": "535",
  "cat": "warning",
  "en": "Tunnel Ahead",
  "fa": "تونل در پیش",
  "ar": "أمامك نفق",
  "img": "signs/535.png"
 },
 {
  "id": "536",
  "cat": "warning",
  "en": "Dockside Ahead",
  "fa": "لبهٔ اسکله در پیش",
  "ar": "أمامك رصيف ميناء",
  "img": "signs/536.png"
 },
 {
  "id": "537",
  "cat": "warning",
  "en": "Uneven Road Ahead",
  "fa": "جادهٔ ناهموار در پیش",
  "ar": "أمامك طريق غير مستو",
  "img": "signs/537.png"
 },
 {
  "id": "539",
  "cat": "warning",
  "en": "Slippery Road Ahead",
  "fa": "جادهٔ لغزنده در پیش",
  "ar": "أمامك طريق زلق",
  "img": "signs/539.png"
 },
 {
  "id": "540",
  "cat": "warning",
  "en": "Low Flying Aircraft",
  "fa": "پرواز هواپیما در ارتفاع پایین",
  "ar": "طيران منخفض",
  "img": "signs/540.png"
 },
 {
  "id": "543",
  "cat": "warning",
  "en": "Beware Danger Ahead",
  "fa": "خطر در پیش (احتیاط)",
  "ar": "انتبه أمامك خطر",
  "img": "signs/543.png"
 },
 {
  "id": "546",
  "cat": "warning",
  "en": "Road Hump Ahead",
  "fa": "سرعت‌گیر در پیش",
  "ar": "أمامك مطبات",
  "img": "signs/546.png"
 },
 {
  "id": "547",
  "cat": "warning",
  "en": "Roadworks Ahead",
  "fa": "کارهای جاده‌ای در پیش",
  "ar": "أمامك أعمال طرق",
  "img": "signs/547.png"
 },
 {
  "id": "405R",
  "cat": "mandatory",
  "en": "Turn Right Only",
  "fa": "فقط به راست",
  "ar": "يمينا فقط",
  "img": "signs/405R.png"
 },
 {
  "id": "408",
  "cat": "mandatory",
  "en": "Straight Ahead Only",
  "fa": "فقط مستقیم",
  "ar": "إلى الأمام فقط",
  "img": "signs/408.png"
 },
 {
  "id": "409R",
  "cat": "mandatory",
  "en": "Turn Right Ahead",
  "fa": "گردش به راست در پیش (اجباری)",
  "ar": "أمامك استدارة لليمين",
  "img": "signs/409R.png"
 },
 {
  "id": "410R",
  "cat": "mandatory",
  "en": "Ahead or Turn Right",
  "fa": "مستقیم یا به راست",
  "ar": "إلى الأمام أو استدر يمينا",
  "img": "signs/410R.png"
 },
 {
  "id": "411",
  "cat": "mandatory",
  "en": "Turn Left or Right Ahead",
  "fa": "در پیش: به چپ یا راست",
  "ar": "إلى الأمام ثم استدر يمينا أو يسارا",
  "img": "signs/411.png"
 },
 {
  "id": "412R",
  "cat": "mandatory",
  "en": "Keep Right",
  "fa": "از سمت راست حرکت کنید",
  "ar": "الزم اليمين",
  "img": "signs/412R.png"
 },
 {
  "id": "413",
  "cat": "mandatory",
  "en": "Pass Either Side",
  "fa": "عبور از هر دو طرف مجاز",
  "ar": "السير في أحد الجانبين",
  "img": "signs/413.png"
 },
 {
  "id": "414",
  "cat": "mandatory",
  "en": "Roundabout (mandatory)",
  "fa": "میدان – دور زدن اجباری",
  "ar": "دوار",
  "img": "signs/414.png"
 },
 {
  "id": "415",
  "cat": "mandatory",
  "en": "One-Way Traffic",
  "fa": "ترافیک یک‌طرفه",
  "ar": "مرور في اتجاه واحد",
  "img": "signs/415.png"
 },
 {
  "id": "416L",
  "cat": "mandatory",
  "en": "One Way (street)",
  "fa": "خیابان یک‌طرفه",
  "ar": "طريق واحد",
  "img": "signs/416L.png"
 },
 {
  "id": "420",
  "cat": "mandatory",
  "en": "Priority Over Approaching Vehicles",
  "fa": "حق تقدم با شما نسبت به خودروهای روبه‌رو",
  "ar": "الأولوية للعربات القادمة",
  "img": "signs/420.png"
 },
 {
  "id": "403",
  "cat": "prohibitory",
  "en": "Stop",
  "fa": "ایست",
  "ar": "قف",
  "img": "signs/403.png"
 },
 {
  "id": "417L",
  "cat": "prohibitory",
  "en": "Left Turn Prohibited",
  "fa": "گردش به چپ ممنوع",
  "ar": "ممنوع الاستدارة لليسار",
  "img": "signs/417L.png"
 },
 {
  "id": "401",
  "cat": "prohibitory",
  "en": "Give Way",
  "fa": "حق تقدم بدهید (رعایت حق تقدم)",
  "ar": "افسح الطريق",
  "img": "signs/401.png"
 },
 {
  "id": "418",
  "cat": "prohibitory",
  "en": "U-Turn Prohibited",
  "fa": "دور زدن ممنوع",
  "ar": "ممنوع الاستدارة للخلف",
  "img": "signs/418.png"
 },
 {
  "id": "419",
  "cat": "prohibitory",
  "en": "Give Way to Approaching Vehicles",
  "fa": "حق تقدم با خودروهای روبه‌رو",
  "ar": "الطريق للعربات القادمة",
  "img": "signs/419.png"
 },
 {
  "id": "421",
  "cat": "prohibitory",
  "en": "No Entry",
  "fa": "ورود ممنوع",
  "ar": "ممنوع الدخول",
  "img": "signs/421.png"
 },
 {
  "id": "423",
  "cat": "prohibitory",
  "en": "All Motor Vehicles Prohibited",
  "fa": "عبور همهٔ وسایل نقلیهٔ موتوری ممنوع",
  "ar": "ممنوع لجميع المركبات الميكانيكية",
  "img": "signs/423.png"
 },
 {
  "id": "424",
  "cat": "prohibitory",
  "en": "Buses Prohibited",
  "fa": "عبور اتوبوس ممنوع",
  "ar": "ممنوع مرور الحافلات",
  "img": "signs/424.png"
 },
 {
  "id": "425",
  "cat": "prohibitory",
  "en": "Delivery Vehicles over 10 Tonnes Prohibited",
  "fa": "عبور کامیون‌های بیش از ۱۰ تن ممنوع",
  "ar": "ممنوع مرور الشاحنات فوق ١٠ طن",
  "img": "signs/425.png"
 },
 {
  "id": "426",
  "cat": "prohibitory",
  "en": "Weight Limit",
  "fa": "محدودیت وزن کل",
  "ar": "حدود الوزن الكلي",
  "img": "signs/426.png"
 },
 {
  "id": "427",
  "cat": "prohibitory",
  "en": "Axle Weight Limit",
  "fa": "محدودیت وزن محور",
  "ar": "حدود وزن المحور",
  "img": "signs/427.png"
 },
 {
  "id": "428",
  "cat": "prohibitory",
  "en": "Width Limit",
  "fa": "محدودیت عرض",
  "ar": "حدود العرض",
  "img": "signs/428.png"
 },
 {
  "id": "429",
  "cat": "prohibitory",
  "en": "Length Limit",
  "fa": "محدودیت طول",
  "ar": "حدود الطول",
  "img": "signs/429.png"
 },
 {
  "id": "430",
  "cat": "prohibitory",
  "en": "Height Limit",
  "fa": "محدودیت ارتفاع",
  "ar": "حدود الارتفاع",
  "img": "signs/430.png"
 },
 {
  "id": "431",
  "cat": "prohibitory",
  "en": "Overtaking Prohibited",
  "fa": "سبقت ممنوع",
  "ar": "ممنوع التجاوز",
  "img": "signs/431.png"
 },
 {
  "id": "432",
  "cat": "prohibitory",
  "en": "Overtaking by Delivery Vehicles Prohibited",
  "fa": "سبقت کامیون ممنوع",
  "ar": "ممنوع التجاوز للشاحنات",
  "img": "signs/432.png"
 },
 {
  "id": "433",
  "cat": "prohibitory",
  "en": "Pedestrians Prohibited",
  "fa": "عبور عابر پیاده ممنوع",
  "ar": "ممنوع عبور المشاة",
  "img": "signs/433.png"
 },
 {
  "id": "434",
  "cat": "prohibitory",
  "en": "Bicycles Prohibited",
  "fa": "عبور دوچرخه ممنوع",
  "ar": "ممنوع الدراجات الهوائية",
  "img": "signs/434.png"
 },
 {
  "id": "436",
  "cat": "prohibitory",
  "en": "Parking Prohibited",
  "fa": "پارک ممنوع",
  "ar": "ممنوع الانتظار",
  "img": "signs/436.png"
 },
 {
  "id": "439",
  "cat": "prohibitory",
  "en": "Sounding Horn Prohibited",
  "fa": "بوق زدن ممنوع",
  "ar": "ممنوع استعمال التنبيه",
  "img": "signs/439.png"
 },
 {
  "id": "440",
  "cat": "prohibitory",
  "en": "Stop for Customs",
  "fa": "توقف برای گمرک",
  "ar": "قف جمارك",
  "img": "signs/440.png"
 },
 {
  "id": "441",
  "cat": "prohibitory",
  "en": "Maximum Speed Limit (km/h)",
  "fa": "حداکثر سرعت مجاز (کیلومتر بر ساعت)",
  "ar": "الحد الأقصى للسرعة كم في الساعة",
  "img": "signs/441.png"
 },
 {
  "id": "446",
  "cat": "prohibitory",
  "en": "Animals Prohibited",
  "fa": "عبور حیوانات ممنوع",
  "ar": "ممنوع مرور الحيوانات",
  "img": "signs/446.png"
 },
 {
  "id": "457",
  "cat": "prohibitory",
  "en": "No Stopping",
  "fa": "توقف مطلقاً ممنوع",
  "ar": "ممنوع الوقوف قطعيا",
  "img": "signs/457.png"
 },
 {
  "id": "302",
  "cat": "info",
  "en": "Parking",
  "fa": "پارکینگ",
  "ar": "مواقف انتظار",
  "img": "signs/302.png"
 },
 {
  "id": "305",
  "cat": "info",
  "en": "Pedestrian Crossing",
  "fa": "گذرگاه عابر پیاده",
  "ar": "عبور مشاة",
  "img": "signs/305.png"
 },
 {
  "id": "306",
  "cat": "info",
  "en": "Pedestrian Subway",
  "fa": "زیرگذر عابر پیاده",
  "ar": "نفق للمشاة",
  "img": "signs/306.png"
 },
 {
  "id": "308",
  "cat": "info",
  "en": "Police Station",
  "fa": "پاسگاه پلیس",
  "ar": "مخفر شرطة",
  "img": "signs/308.png"
 },
 {
  "id": "309",
  "cat": "info",
  "en": "Hospital",
  "fa": "بیمارستان",
  "ar": "مستشفى",
  "img": "signs/309.png"
 },
 {
  "id": "310M",
  "cat": "info",
  "en": "Hotel",
  "fa": "هتل",
  "ar": "فندق",
  "img": "signs/310M.png"
 },
 {
  "id": "311R",
  "cat": "info",
  "en": "Restaurant",
  "fa": "رستوران",
  "ar": "مطعم",
  "img": "signs/311R.png"
 },
 {
  "id": "312",
  "cat": "info",
  "en": "Cafeteria / Refreshments",
  "fa": "کافه / نوشیدنی",
  "ar": "مرطبات",
  "img": "signs/312.png"
 },
 {
  "id": "313",
  "cat": "info",
  "en": "Picnic Area",
  "fa": "محل پیک‌نیک",
  "ar": "منطقة منتزه",
  "img": "signs/313.png"
 },
 {
  "id": "314",
  "cat": "info",
  "en": "Camp Site",
  "fa": "محل کمپ",
  "ar": "موقع مخيم",
  "img": "signs/314.png"
 },
 {
  "id": "315",
  "cat": "info",
  "en": "First Aid Centre",
  "fa": "مرکز کمک‌های اولیه",
  "ar": "مركز إسعاف",
  "img": "signs/315.png"
 },
 {
  "id": "316",
  "cat": "info",
  "en": "Information Center",
  "fa": "مرکز اطلاعات",
  "ar": "مركز استعلامات",
  "img": "signs/316.png"
 },
 {
  "id": "317",
  "cat": "info",
  "en": "Public Telephone",
  "fa": "تلفن عمومی",
  "ar": "هاتف عمومي",
  "img": "signs/317.png"
 },
 {
  "id": "318",
  "cat": "info",
  "en": "Petrol Station",
  "fa": "پمپ بنزین",
  "ar": "محطة للوقود",
  "img": "signs/318.png"
 },
 {
  "id": "319",
  "cat": "info",
  "en": "Repair Service",
  "fa": "تعمیرگاه خودرو",
  "ar": "محطة إصلاح مركبات",
  "img": "signs/319.png"
 },
 {
  "id": "327",
  "cat": "info",
  "en": "U-Turn Opening",
  "fa": "محل دور زدن",
  "ar": "فتحة للاستدارة",
  "img": "signs/327.png"
 },
 {
  "id": "329",
  "cat": "info",
  "en": "No Through Road (dead end)",
  "fa": "بن‌بست",
  "ar": "الطريق مسدود",
  "img": "signs/329.png"
 },
 {
  "id": "330R",
  "cat": "info",
  "en": "Ahead or Turn Right (lane)",
  "fa": "مستقیم یا به راست (مسیر)",
  "ar": "إلى الأمام أو يمينا",
  "img": "signs/330R.png"
 },
 {
  "id": "435",
  "cat": "mandatory",
  "en": "Bicycles Only",
  "fa": "فقط دوچرخه",
  "ar": "للدراجات الهوائية فقط",
  "img": "signs/435.png"
 },
 {
  "id": "450",
  "cat": "info",
  "en": "Police – Slow",
  "fa": "پلیس – آهسته",
  "ar": "خفف – شرطة",
  "img": "signs/450.png"
 },
 {
  "id": "451",
  "cat": "info",
  "en": "Police – Accident",
  "fa": "پلیس – تصادف",
  "ar": "شرطة – حادث",
  "img": "signs/451.png"
 },
 {
  "id": "453",
  "cat": "info",
  "en": "Bus and Bicycle Lane",
  "fa": "خط ویژهٔ اتوبوس و دوچرخه",
  "ar": "حارة للحافلات والدراجات الهوائية",
  "img": "signs/453.png"
 },
 {
  "id": "504",
  "cat": "plates",
  "en": "Distance to Hazard",
  "fa": "فاصله تا محل خطر",
  "ar": "مسافة لموقع خطر",
  "img": "signs/504.png"
 },
 {
  "id": "458",
  "cat": "plates",
  "en": "Except Loading & Unloading",
  "fa": "به‌جز بارگیری و تخلیه",
  "ar": "عدا التحميل والتنزيل",
  "img": "signs/458.png"
 },
 {
  "id": "300",
  "cat": "plates",
  "en": "District or Town Name",
  "fa": "نام منطقه یا شهر",
  "ar": "اسم المنطقة أو المدينة",
  "img": "signs/300.png"
 },
 {
  "id": "301",
  "cat": "plates",
  "en": "Bridge Name",
  "fa": "نام پل",
  "ar": "اسم جسر",
  "img": "signs/301.png"
 },
 {
  "id": "303",
  "cat": "plates",
  "en": "Buses Only (plate)",
  "fa": "فقط اتوبوس (تابلوی مکمل)",
  "ar": "الحافلات فقط",
  "img": "signs/303.png"
 },
 {
  "id": "304",
  "cat": "plates",
  "en": "Delivery Vehicles Only",
  "fa": "فقط کامیون",
  "ar": "الشاحنات فقط",
  "img": "signs/304.png"
 },
 {
  "id": "402",
  "cat": "plates",
  "en": "Train",
  "fa": "قطار",
  "ar": "قطار",
  "img": "signs/402.png"
 },
 {
  "id": "322",
  "cat": "plates",
  "en": "No Through Road (text plate)",
  "fa": "راه بن‌بست (تابلوی نوشته‌دار)",
  "ar": "طريق غير نافذ",
  "img": "signs/322.png"
 },
 {
  "id": "320",
  "cat": "plates",
  "en": "Hospital (text plate)",
  "fa": "بیمارستان (تابلوی نوشته‌دار)",
  "ar": "مستشفى",
  "img": "signs/320.png"
 },
 {
  "id": "321",
  "cat": "plates",
  "en": "Taxis Only",
  "fa": "فقط تاکسی",
  "ar": "أجرة فقط",
  "img": "signs/321.png"
 },
 {
  "id": "333",
  "cat": "plates",
  "en": "Advisory Speed Limit",
  "fa": "سرعت توصیه‌شده",
  "ar": "حد السرعة المستحسن",
  "img": "signs/333.png"
 },
 {
  "id": "456",
  "cat": "plates",
  "en": "Tow Away Zone",
  "fa": "محدودهٔ جرثقیل (یدک‌کشی خودرو)",
  "ar": "منطقة قطر المركبات",
  "img": "signs/456.png"
 },
 {
  "id": "508",
  "cat": "plates",
  "en": "Slow",
  "fa": "آهسته",
  "ar": "خفف",
  "img": "signs/508.png"
 },
 {
  "id": "452",
  "cat": "plates",
  "en": "Time Limit",
  "fa": "محدودیت زمانی",
  "ar": "حدود الوقت",
  "img": "signs/452.png"
 },
 {
  "id": "455",
  "cat": "plates",
  "en": "Except Taxis",
  "fa": "به‌جز تاکسی",
  "ar": "ما عدا الأجرة",
  "img": "signs/455.png"
 },
 {
  "id": "448",
  "cat": "plates",
  "en": "Heavy Vehicles Prohibited from Certain Lanes",
  "fa": "ممنوعیت کامیون سنگین در برخی خطوط",
  "ar": "ممنوع مرور الشاحنات الثقيلة على مسارات معينة",
  "img": "signs/448.png"
 },
 {
  "id": "442",
  "cat": "plates",
  "en": "Minimum Speed",
  "fa": "حداقل سرعت",
  "ar": "أدنى سرعة",
  "img": "signs/442.png"
 },
 {
  "id": "443",
  "cat": "plates",
  "en": "End of Minimum Speed",
  "fa": "پایان حداقل سرعت",
  "ar": "نهاية أدنى سرعة",
  "img": "signs/443.png"
 },
 {
  "id": "437L",
  "cat": "plates",
  "en": "Parking / No Parking Limit (one direction)",
  "fa": "محدودهٔ پارک / پارک ممنوع (یک جهت)",
  "ar": "حدود الانتظار أو ممنوع الانتظار",
  "img": "signs/437L.png"
 },
 {
  "id": "438",
  "cat": "plates",
  "en": "Parking / No Parking Limit (both directions)",
  "fa": "محدودهٔ پارک / پارک ممنوع (دو جهت)",
  "ar": "حدود الانتظار أو ممنوع الانتظار",
  "img": "signs/438.png"
 },
 {
  "id": "422",
  "cat": "plates",
  "en": "Except Buses",
  "fa": "به‌جز اتوبوس",
  "ar": "عدا الباصات",
  "img": "signs/422.png"
 },
 {
  "id": "511VR",
  "cat": "plates",
  "en": "Sharp Change of Direction",
  "fa": "تغییر شدید مسیر",
  "ar": "تغير حاد في الاتجاه",
  "img": "signs/511VR.png"
 },
 {
  "id": "518",
  "cat": "plates",
  "en": "Maximum Height 5.0 m",
  "fa": "حداکثر ارتفاع ۵ متر",
  "ar": "الارتفاع الأقصى ٥ م",
  "img": "signs/518.png"
 },
 {
  "id": "527",
  "cat": "plates",
  "en": "School",
  "fa": "مدرسه",
  "ar": "مدرسة",
  "img": "signs/527.png"
 },
 {
  "id": "555L",
  "cat": "warning",
  "en": "Change Carriageway Ahead",
  "fa": "تغییر مسیر جاده در پیش",
  "ar": "غير المسار في الأمام",
  "img": "signs/555L.png"
 },
 {
  "id": "556",
  "cat": "warning",
  "en": "Loose Gravel",
  "fa": "سنگ‌ریزهٔ پراکنده",
  "ar": "حصى متناثرة",
  "img": "signs/556.png"
 },
 {
  "id": "554VR",
  "cat": "works",
  "en": "Sharp Change of Direction Barricade",
  "fa": "مانع تغییر شدید مسیر",
  "ar": "تغير حاد في اتجاه الحواجز",
  "img": "signs/554VR.png"
 },
 {
  "id": "553",
  "cat": "works",
  "en": "Barricade",
  "fa": "مانع (راه‌بند)",
  "ar": "الحواجز",
  "img": "signs/553.png"
 },
 {
  "id": "SD",
  "cat": "warning",
  "en": "Steep Downgrade",
  "fa": "سرازیری تند",
  "ar": "منحدر",
  "img": "signs/SD.png"
 },
 {
  "id": "557",
  "cat": "works",
  "en": "On Red Stop Here",
  "fa": "هنگام چراغ قرمز اینجا بایستید",
  "ar": "عند الضوء الأحمر قف مكانك",
  "img": "signs/557.png"
 },
 {
  "id": "558",
  "cat": "works",
  "en": "Road Ahead Closed",
  "fa": "جادهٔ پیش رو بسته است",
  "ar": "أمامك طريق مغلق",
  "img": "signs/558.png"
 },
 {
  "id": "559",
  "cat": "works",
  "en": "Road Closed",
  "fa": "جاده بسته است",
  "ar": "الطريق مغلق",
  "img": "signs/559.png"
 },
 {
  "id": "560",
  "cat": "works",
  "en": "Temporary Surface",
  "fa": "رویهٔ موقت",
  "ar": "رصف مؤقت",
  "img": "signs/560.png"
 },
 {
  "id": "564",
  "cat": "works",
  "en": "Traffic Control Ahead",
  "fa": "کنترل ترافیک در پیش",
  "ar": "أمامك تحكم مروري",
  "img": "signs/564.png"
 },
 {
  "id": "565R",
  "cat": "works",
  "en": "Pedestrians (this way)",
  "fa": "مسیر عابر پیاده",
  "ar": "للمشاة",
  "img": "signs/565R.png"
 },
 {
  "id": "566",
  "cat": "works",
  "en": "Works Traffic Only",
  "fa": "فقط خودروهای عملیات جاده‌ای",
  "ar": "مرور لأعمال الطرق فقط",
  "img": "signs/566.png"
 },
 {
  "id": "567",
  "cat": "works",
  "en": "No Works Traffic",
  "fa": "ورود خودروهای عملیات جاده‌ای ممنوع",
  "ar": "ممنوع لأعمال الطرق",
  "img": "signs/567.png"
 },
 {
  "id": "568",
  "cat": "works",
  "en": "Works Access",
  "fa": "ورودی محل عملیات جاده‌ای",
  "ar": "مدخل لمواقع أعمال الطرق",
  "img": "signs/568.png"
 },
 {
  "id": "569",
  "cat": "works",
  "en": "New Junction Layout",
  "fa": "طرح جدید تقاطع",
  "ar": "تخطيط جديد للمفترق",
  "img": "signs/569.png"
 },
 {
  "id": "572",
  "cat": "works",
  "en": "Stop When Lights Show",
  "fa": "هنگام روشن شدن چراغ بایستید",
  "ar": "قف عند إضاءة الإشارة",
  "img": "signs/572.png"
 },
 {
  "id": "570",
  "cat": "works",
  "en": "Use Shoulder",
  "fa": "از شانهٔ جاده استفاده کنید",
  "ar": "استعمل كتف الطريق",
  "img": "signs/570.png"
 },
 {
  "id": "571",
  "cat": "works",
  "en": "Rejoin Main Carriageway",
  "fa": "بازگشت به جادهٔ اصلی",
  "ar": "الانضمام إلى الطريق الرئيسي",
  "img": "signs/571.png"
 },
 {
  "id": "528",
  "cat": "plates",
  "en": "Playground",
  "fa": "زمین بازی کودکان",
  "ar": "ملعب للأطفال",
  "img": "signs/528.png"
 },
 {
  "id": "538",
  "cat": "plates",
  "en": "For 2 km",
  "fa": "به طول ۲ کیلومتر",
  "ar": "لمسافة ٢ كم",
  "img": "signs/538.png"
 },
 {
  "id": "544",
  "cat": "plates",
  "en": "Accident",
  "fa": "تصادف",
  "ar": "حادث",
  "img": "signs/544.png"
 },
 {
  "id": "545",
  "cat": "plates",
  "en": "Sand Drifts",
  "fa": "تجمع شن و ماسه",
  "ar": "رمال متراكمة",
  "img": "signs/545.png"
 },
 {
  "id": "548",
  "cat": "works",
  "en": "Line Painting",
  "fa": "خط‌کشی جاده",
  "ar": "تخطيط مسارات",
  "img": "signs/548.png"
 },
 {
  "id": "549",
  "cat": "works",
  "en": "End (of roadworks)",
  "fa": "پایان (عملیات)",
  "ar": "نهاية",
  "img": "signs/549.png"
 },
 {
  "id": "550R",
  "cat": "works",
  "en": "Lane Closure – right lane of 2 closed",
  "fa": "بسته شدن خط – خط راست از ۲ خط",
  "ar": "علامات المسارات المغلقة",
  "img": "signs/550R.png"
 },
 {
  "id": "551",
  "cat": "works",
  "en": "Lane Closure – right lane of 3 closed",
  "fa": "بسته شدن خط – خط راست از ۳ خط",
  "ar": "علامات المسارات المغلقة",
  "img": "signs/551.png"
 },
 {
  "id": "552",
  "cat": "works",
  "en": "Lane Closure – right lane of 4 closed",
  "fa": "بسته شدن خط – خط راست از ۴ خط",
  "ar": "علامات المسارات المغلقة",
  "img": "signs/552.png"
 },
 {
  "id": "561R",
  "cat": "works",
  "en": "Diversion",
  "fa": "انحراف اجباری مسیر",
  "ar": "اتجاه جبري",
  "img": "signs/561R.png"
 },
 {
  "id": "562F",
  "cat": "works",
  "en": "Diverted Traffic",
  "fa": "ترافیک منحرف‌شده",
  "ar": "المرور محول",
  "img": "signs/562F.png"
 },
 {
  "id": "563",
  "cat": "works",
  "en": "End of Diversion",
  "fa": "پایان انحراف مسیر",
  "ar": "نهاية التحويلة",
  "img": "signs/563.png"
 },
 {
  "id": "307R",
  "cat": "works",
  "en": "Emergency Telephone",
  "fa": "تلفن اضطراری",
  "ar": "هاتف طوارئ",
  "img": "signs/307R.png"
 },
 {
  "id": "404",
  "cat": "mandatory",
  "en": "Go",
  "fa": "حرکت کنید",
  "ar": "سر",
  "img": "signs/404.png"
 },
 {
  "id": "324R",
  "cat": "motorway",
  "en": "Distance to Exit Marker – 3 bars (300 m)",
  "fa": "نشانگر فاصله تا خروجی – سه خط",
  "ar": "علامات المسافة لمخرج",
  "img": "signs/324R.png"
 },
 {
  "id": "325R",
  "cat": "motorway",
  "en": "Distance to Exit Marker – 2 bars (200 m)",
  "fa": "نشانگر فاصله تا خروجی – دو خط",
  "ar": "علامات المسافة لمخرج",
  "img": "signs/325R.png"
 },
 {
  "id": "326R",
  "cat": "motorway",
  "en": "Distance to Exit Marker – 1 bar (100 m)",
  "fa": "نشانگر فاصله تا خروجی – یک خط",
  "ar": "علامات المسافة لمخرج",
  "img": "signs/326R.png"
 },
 {
  "id": "444",
  "cat": "motorway",
  "en": "Motorway Begins",
  "fa": "شروع بزرگراه",
  "ar": "بداية الطريق السريع",
  "img": "signs/444.png"
 },
 {
  "id": "445",
  "cat": "motorway",
  "en": "Motorway Instructions",
  "fa": "مقررات بزرگراه",
  "ar": "إرشادات للطريق السريع",
  "img": "signs/445.png"
 },
 {
  "id": "449",
  "cat": "motorway",
  "en": "End of Motorway",
  "fa": "پایان بزرگراه",
  "ar": "نهاية الطريق السريع",
  "img": "signs/449.png"
 },
 {
  "id": "328",
  "cat": "motorway",
  "en": "Lane Direction",
  "fa": "جهت خطوط",
  "ar": "اتجاه مسار",
  "img": "signs/328.png"
 }
];

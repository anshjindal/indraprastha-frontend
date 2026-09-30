export type ScheduleDay = {
  date: string;
  hindiDate: string;
  weekday: string;
  hindiWeekday: string;
  hindi: string[];
  english: string[];
};

export const schedule2026: ScheduleDay[] = [
  {
    date: "2026-10-10",
    hindiDate: "10 अक्टूबर 2026",
    weekday: "Saturday",
    hindiWeekday: "शनिवार",
    hindi: ["गणेश वंदना", "शिव-पार्वती संवाद", "रावण तपस्या", "नारद मोह"],
    english: ["Ganesh Vandana", "Shiv–Parvati Samvad", "Ravan Tapasya", "Narad Moh"],
  },
  {
    date: "2026-10-11",
    hindiDate: "11 अक्टूबर 2026",
    weekday: "Sunday",
    hindiWeekday: "रविवार",
    hindi: ["रावण वेदवती", "रावण वरदान", "सीता जन्मोत्सव"],
    english: ["Ravan–Vedvati", "Ravan Vardan", "Sita Janmotsav"],
  },
  {
    date: "2026-10-12",
    hindiDate: "12 अक्टूबर 2026",
    weekday: "Monday",
    hindiWeekday: "सोमवार",
    hindi: ["भव्य राम जन्मोत्सव", "ताड़का वध"],
    english: ["Grand Ram Janmotsav", "Tadka Vadh"],
  },
  {
    date: "2026-10-13",
    hindiDate: "13 अक्टूबर 2026",
    weekday: "Tuesday",
    hindiWeekday: "मंगलवार",
    hindi: ["गौरी पूजन", "सीता स्वयंवर", "लक्ष्मण-परशुराम संवाद"],
    english: ["Gauri Poojan", "Sita Swayamvar", "Lakshman–Parshuram Samvad"],
  },
  {
    date: "2026-10-14",
    hindiDate: "14 अक्टूबर 2026",
    weekday: "Wednesday",
    hindiWeekday: "बुधवार",
    hindi: ["राम-सीता विवाह", "कैकेयी-दशरथ संवाद", "राम वनवास"],
    english: ["Ram–Sita Vivah", "Kaikeyi–Dashrath Samvad", "Ram Vanvas"],
  },
  {
    date: "2026-10-15",
    hindiDate: "15 अक्टूबर 2026",
    weekday: "Thursday",
    hindiWeekday: "गुरुवार",
    hindi: ["केवट", "निषादराज", "दशरथ मरण", "भरत-कैकेयी संवाद"],
    english: ["Kevat", "Nishadraj", "Dashrath Maran", "Bharat–Kaikeyi Samvad"],
  },
  {
    date: "2026-10-16",
    hindiDate: "16 अक्टूबर 2026",
    weekday: "Friday",
    hindiWeekday: "शुक्रवार",
    hindi: ["भरत मिलाप", "पंचवटी", "शूर्पणखा", "सीता हरण"],
    english: ["Bharat Milap", "Panchvati", "Shurpanakha", "Sita Haran"],
  },
  {
    date: "2026-10-17",
    hindiDate: "17 अक्टूबर 2026",
    weekday: "Saturday",
    hindiWeekday: "शनिवार",
    hindi: ["हनुमान मिलन", "सुग्रीव संवाद", "बाली मरण", "अशोक वाटिका"],
    english: ["Hanuman Milan", "Sugriv Samvad", "Bali Maran", "Ashok Vatika"],
  },
  {
    date: "2026-10-18",
    hindiDate: "18 अक्टूबर 2026",
    weekday: "Sunday",
    hindiWeekday: "रविवार",
    hindi: ["हनुमान-रावण संवाद", "लंका दहन", "रावण-विभीषण संवाद", "सेतु निर्माण"],
    english: ["Hanuman–Ravan Samvad", "Lanka Dahan", "Ravan–Vibhishan Samvad", "Setu Nirman"],
  },
  {
    date: "2026-10-19",
    hindiDate: "19 अक्टूबर 2026",
    weekday: "Monday",
    hindiWeekday: "सोमवार",
    hindi: ["रावण-अंगद संवाद", "लक्ष्मण मूर्छा", "मेघनाथ वध", "कुंभकरण वध"],
    english: ["Ravan–Angad Samvad", "Lakshman Moorchha", "Meghnath Vadh", "Kumbhkaran Vadh"],
  },
  {
    date: "2026-10-20",
    hindiDate: "20 अक्टूबर 2026",
    weekday: "Tuesday",
    hindiWeekday: "मंगलवार",
    hindi: ["रावण वध", "दशहरा महोत्सव", "राजतिलक"],
    english: ["Ravan Vadh", "Dussehra Mohotsav", "Rajtilak"],
  },
];

export function formatDay(iso: string) {
  return new Date(`${iso}T00:00:00+05:30`).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    timeZone: "Asia/Kolkata",
  });
}

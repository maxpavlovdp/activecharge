import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "ua",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      ua: {
        translation: {
          btns: {
            start: "Старт",
            startFree: "Cтарт Фрі",
          },
          title: "Заряди 220 кілометрів за ніч",
          contacts: "Зв'яжіться з нами",
          offer: "Умови користування",
          wt: "кВт",
          v: "В",
          km: " км",
          chargedCongrats: "Вітаннячка!",
          chargedkWt: "Зарядили в тачку ",
          power: "Потужність",
          charging: "Зарядили",
          voltage: "Вольтаж",
          chargingSpeed: "Швидкість заряду",
          errorDevHeader: "Помилка серверу!",
          errorDevBody: "Ми вже вирішуємо проблему!",
          errorHeader: "Девайс офлайн",
          errorBody: "Вибачте! Девайс офлайн. Спробуйте, будь ласка, пізніше",
          offerTitle: "Договір публічної оферти",
          contents: "Зміст",
          callUs: "Зателефонувати",
          instagram: "Інстаграм",
          telegram: "Телеграм",
          watsapp: "Ватсап",
          tapCall: "Натисніть, щоб зателефонувати",
          telDima: "Дмитро",
          telMax: "Макс",
          notFound: "Сторінка не знайдена",
          overload: {
            waitForLink: "Зачекайте секунду",
            gettingLink: "Отримуємо посилання для оплати",
            btnPay: "Оплатити",
            successChecked: "Вийшло",
            letsCharge: "Погнали заряджати",
            checking: "перевіряємо навантаження",
            overloadDetected: "Виявлено перевантаження",
            slowdown: "Будь ласка, зменшіть напругу до",
            repeat: "і спробуйте ще раз",
            btnRepeat: "Спробуй ще",
          },
          footer: {
            part1: "Всі права захищені",
            part2: "Розроблено",
            part3: "з ♥ до електромобілів",
          },
        },
      },
      en: {
        translation: {
          btns: {
            start: "Start",
            startFree: "Start Free",
          },
          title: "Charge 220 kilometers per night",
          contacts: "Contact Us",
          offer: "Terms of use",
          wt: "kWt",
          v: "V",
          km: " km",
          chargedCongrats: "Congrats!!!",
          chargedkWt: "Charged your car by ",
          power: "Power",
          charging: "Charged",
          voltage: "Voltage",
          chargingSpeed: "Charging speed",
          errorDevHeader: "Server error!",
          errorDevBody: "We are reinventing!",
          errorHeader: "Device is offline",
          errorBody: "Sorry! Device is offline. Please, try later",
          offerTitle: "Public offer agreement",
          contents: "Contents",
          callUs: "Call Us",
          instagram: "Instagram",
          telegram: "Telegram",
          watsapp: "WatsApp",
          tapCall: "Tap for calling",
          telDima: "Dima",
          telMax: "Max",
          notFound: "Page not found",
          overload: {
            waitForLink: "Wait a second",
            gettingLink: "Getting payment link",
            btnPay: "Pay",
            successChecked: "Success",
            letsCharge: "Let`s charge it",
            checking: "is overloaded checking",
            overloadDetected: "Overload",
            slowdown: "Please, slow down to",
            repeat: "and try again",
            btnRepeat: "Try Again",
          },
          footer: {
            part1: "All rights reserved",
            part2: "Made by",
            part3: "with ♥ to Zero Emission Vehicles",
          },
        },
      },
    },
  });

export default i18n;

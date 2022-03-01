import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {getLocales} from 'react-native-localize';
i18n.use(initReactI18next).init({
  lng: getLocales()[0].languageCode, //This is used to set init language.
  fallbackLng: 'en', //This is as the name suggests a fallback language if key not //found
  resources: {
    en: {
      translation: {
        Happy: 'Happiness',
        // 'Hey Yo Im inside Room': 'Hey Yo Im inside Room',
      },
    },
    hi: {
      translation: {
        Happy: 'ख़ुशी',
      },
    },
    ta: {
      translation: {
        Happy: 'மகிழ்ச்சி',
      },
    },
  },
});
export default i18n;

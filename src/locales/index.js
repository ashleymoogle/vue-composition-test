import Vue from 'vue'
import VueI18n from 'vue-i18n'

import en from './en.json'
import fr from './fr.json'

Vue.use(VueI18n)

const defaultLocale = localStorage.getItem('locale') || 'en'

const languages = {
  en: en,
  fr: fr
}

const messages = Object.assign(languages)
// Init locales
const i18n = new VueI18n({
  locale: defaultLocale, // set default locale
  fallbackLocale: 'en',
  messages // set locale messages
})

export default i18n

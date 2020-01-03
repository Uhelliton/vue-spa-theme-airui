/* import { SessionStorage } from 'quasar'

const STORED_SETTINGS = storedSettings => {
  const settings = {}
  Object.keys(storedSettings).forEach(key => {
    const item = SessionStorage.getItem(`app.settings.${key}`)
    settings[key] = typeof item !== 'undefined' ? item : storedSettings[key]
  })
  return settings
} */

export default {
  locale: 'en-US',
  isSidebarOpen: false,
  isSupportChatOpen: false,
  isMobileView: true,
  isTabletView: false,
  isMobileMenuOpen: false,
  isMenuCollapsed: false,
  isMenuShadow: false,
  isMenuUnfixed: false,
  menuLayoutType: 'top', // left, top, top-dark, nomenu
  menuType: 'default', // default, flyout, compact
  menuColor: 'dark', // dark, blue, gray, white
  flyoutMenuColor: 'white', // dark, blue, gray, white
  systemLayoutColor: 'white', // white, dark, blue, gray, image
  isTopbarFixed: true,
  isFooterDark: true,
  isContentNoMaxWidth: true,
  isAppMaxWidth: false,
  isGrayBackground: false,
  isGrayTopbar: true,
  isCardShadow: false,
  isSquaredBorders: false,
  isBorderless: false,
  routerAnimation: 'slide-fadein-up' // none, slide-fadein-up, slide-fadein-right, fadein, zoom-fadein
}

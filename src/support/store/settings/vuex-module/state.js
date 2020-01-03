import { SessionStorage } from 'quasar'

const STORED_SETTINGS = storedSettings => {
  const settings = {}
  Object.keys(storedSettings).forEach(key => {
    const item = SessionStorage.getItem(`app.settings.${key}`)
    settings[key] = typeof item !== 'undefined' ? item : storedSettings[key]
  })
  return settings
}

export default {
  ...STORED_SETTINGS({
    locale: 'en-US',
    isSidebarOpen: false,
    isSupportChatOpen: false,
    isMobileView: false,
    isTabletView: false,
    isMobileMenuOpen: false,
    isMenuCollapsed: false,
    isMenuShadow: false,
    isMenuUnfixed: false,
    menuLayoutType: 'left', // left, top, top-dark, nomenu
    menuType: 'default', // default, flyout, compact
    menuColor: 'dark', // dark, blue, gray, white
    flyoutMenuColor: 'blue', // dark, blue, gray, white
    systemLayoutColor: 'gray', // white, dark, blue, gray, image
    isTopbarFixed: true,
    isFooterDark: false,
    isContentNoMaxWidth: false,
    isAppMaxWidth: true,
    isGrayBackground: false,
    isGrayTopbar: false,
    isCardShadow: false,
    isSquaredBorders: false,
    isBorderless: false,
    routerAnimation: 'slide-fadein-up' // none, slide-fadein-up, slide-fadein-right, fadein, zoom-fadein
  })
}

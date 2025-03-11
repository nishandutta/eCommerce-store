export const MINIMUM_QUANTITY = 1
export const MAXIMUM_QUANTITY = 1000
export const DEFAULT_SWIPER_SPEED = 1000
export const TOAST_ALERT_DURATION_MS = 6000
export const SCROLL_REQUIRED = 1000
export const DELAYS = [500, 1000, 1500, 2000, 2500, 3000, 3500]
export const SIMPLE_DELAYS = [1200, 1400, 1600, 1800]
export const SCREEN_SIZES = {
  desktop: 1200,
  laptop: 992,
  tablet: 768,
  mobile: 428,
}
export const TIME_UNITS = ['days', 'hours', 'minutes', 'seconds']
export const UN_BUILT_PAGES = [
  'cancellations',
  'reviews',
  'faq',
  'terms',
  'privacy',
  'notification',
]
export const pagesRequireSignIn = [
  '/favorites',
  '/checkout',
  '/profile',
  '/wishlist',
  '/cart',
  '/order',
]
export const PRODUCT_SIZES = [
  {
    size: 'XS',
    title: 'X Small',
  },
  {
    size: 'S',
    title: 'Small',
  },
  {
    size: 'M',
    title: 'Medium',
  },
  {
    size: 'L',
    title: 'Large',
  },
  {
    size: 'XL',
    title: 'X Large',
  },
]

export const regexPatterns = {
  email: /^[0-9a-zA-Z._]+@[a-z]+\.[a-z]+$/,
  price: /\B(?=(\d{3})+(?!\d))/g,
  words: /([-]|\s?&\s|'s[-&]?)/g,
  iraqiPhone: /^\d{11}$/,
}

export const DEFAULT_LOGIN_DATA = {
  username: 'John Doe',
  emailOrPhone: 'john.doe@gmail.com',
  password: 'password12345',
  isSignIn: true,
}

export const NAV_PROPS = {
  signIn: {
    showHeart: true,
    showCart: true,
    showUser: true,
  },
  notSignIn: {
    showHeart: false,
    showCart: false,
    showUser: false,
  },
  signUpPage: {
    showHeart: false,
    showCart: false,
    showUser: false,
  },
}

export const arraysToEmpty = [
  'favoritesProducts',
  'searchProducts',
  'orderProducts',
  'cartProducts',
  'wishList',
]

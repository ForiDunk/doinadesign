import MobileDetect from 'mobile-detect';

const md = new MobileDetect(window.navigator.userAgent);
export const isPhone = md.phone() != null;

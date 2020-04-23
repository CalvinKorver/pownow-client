import MobileDetect from "mobile-detect";
import { Responsive } from "semantic-ui-react"

export const ENTER_DURATION=.5
export const EXIT_DURATION=.2

export const DEFAULT_VARIANTS = {
    initial: { opacity: 0 },
    enter: { opacity: 1, transition: { duration: ENTER_DURATION } },
    exit: { opacity: 0, transition: { duration: EXIT_DURATION } }
  }

export const INDEX_VARIANTS = {
  initial: { opacity: 1 },
  enter: { opacity: 1},
  exit: { opacity: 1}
}

export const getWidthFactory = isMobileFromSSR => () => {
  const isSSR = typeof window === "undefined";
  const ssrValue = isMobileFromSSR
      ? Responsive.onlyMobile.maxWidth
      : Responsive.onlyTablet.minWidth;

  console.log(ssrValue)
  return isSSR ? ssrValue : window.innerWidth;
};

export const handleMobile = (req) => {
  const md = new MobileDetect(req.headers["user-agent"]);
  const isMobileFromSSR = !!md.mobile();

  return {
      props: {
          isMobileFromSSR,
          deviceInfo: {
              mobile: md.mobile(),
              tablet: md.tablet(),
              os: md.os(),
              userAgent: md.userAgent()
          }
      }
  }
}
import { Grid, Header, Message, Responsive, Row, Segment } from "semantic-ui-react"

import { DEFAULT_VARIANTS } from "../lib";
import MobileDetect from "mobile-detect";
import ResponsiveContainer from "../components/ResponsiveContainer";
import { motion } from "framer-motion";

const What = (props) => {
    const copy = [
        <span>Identify lifts you want to <br /> be notified for and sign up</span>,
        <span>When your lift opens, <br />we will send you a text <br />within seconds!</span>,
        <span>Go shred!</span>
    ]
    const img_path = ['/cablecar.png', '/cellphone.png', '/skier.png']
    return (
        <motion.div initial="exit" animate="enter" exit="exit">
            <motion.div variants={DEFAULT_VARIANTS}>
                <ResponsiveContainer
                    getWidth={getWidthFactory(props.isMobileFromSSR)}
                    content={{ copy: copy, img_path: img_path }} />
            </motion.div>
        </motion.div>
    )
}

export default What

export const getWidthFactory = isMobileFromSSR => () => {
    const isSSR = typeof window === "undefined";
    const ssrValue = isMobileFromSSR
        ? Responsive.onlyMobile.maxWidth
        : Responsive.onlyTablet.minWidth;

    return isSSR ? ssrValue : window.innerWidth;
};


export async function getServerSideProps(ctx) {
    const req = ctx.req
    if (req) {
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
    return null
}
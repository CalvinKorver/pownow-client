import { DEFAULT_VARIANTS, getWidthFactory, handleMobile } from "../lib";
import { Grid, Header, Message, Responsive, Row, Segment } from "semantic-ui-react"

import ResponsiveContainer from "../components/ResponsiveContainer";
import { motion } from "framer-motion";

const What = (props) => {
    const copy = [
        <Header as='h3' textAlign='center'>Identify lifts you want to <br /> be notified for and sign up</Header>,
        <Header as='h3' textAlign='center'>When your lift opens, <br />we will send you a text <br />within seconds!</Header>,
        <Header as='h3' textAlign='center'>Go shred!</Header>
    ]
    const img_path = ['/cablecar.png', '/cellphone.png', '/skier.png']
    return (
        <motion.div initial="exit" animate="enter" exit="exit">
            <motion.div variants={DEFAULT_VARIANTS}>
                <ResponsiveContainer
                    content={{ copy: copy, img_path: img_path }}
                    getWidth={getWidthFactory(props.isMobileFromSSR)} />
            </motion.div>
        </motion.div>
    )
}

export async function getServerSideProps(ctx) {
    return handleMobile(ctx.req)
}

export default What
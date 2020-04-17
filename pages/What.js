import { Grid, Header, Message, Responsive, Row, Segment } from "semantic-ui-react"

import { DEFAULT_VARIANTS } from "../lib";
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
                    content={{ copy: copy, img_path: img_path }} />
            </motion.div>
        </motion.div>
    )
}

export default What
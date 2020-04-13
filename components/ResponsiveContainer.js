import { Grid, Header, Image, Responsive, Segment, Transition } from "semantic-ui-react"
import { HowImage, LargerP } from "../style/style";
import { useEffect, useState } from "react";

import { motion } from 'framer-motion';

const ResponsiveContainer = (props, { children, getWidth }) => {
    return (
        <div>
            <DesktopContainer getWidth={getWidth} content={props.content}>{children}</DesktopContainer>
            <MobileContainer getWidth={getWidth} content={props.content}>{children} </MobileContainer>
        </div>
    )
}

const MobileContainer = (props, { children, getWidth }) => {
    const content = props.content
    const cols = content.copy.map((value, i) => {
        return (<Grid.Column key={i}>
            {/* Small Screen */}
            <Segment textAlign='center' style={{ padding: '5%' }}>
                <Image style={{ margin: '0 auto', maxWidth: '150px' }} className="how-img" src={content.img_path[i]}></Image>
                <Header as='h4' />
                {value}
                <Header />
            </Segment>
        </Grid.Column>
        )
    })
    return (
        <Responsive
            fireOnMount
            getWidth={getWidth}
            maxWidth={Responsive.onlyMobile.maxWidth}>
            <Grid centered columns={1}>
                {cols}
            </Grid>
        </Responsive>
    )
}

const DesktopContainer = (props, { children, getWidth }) => {
    const [vis1, setVis1] = useState(false);
    const [vis2, setVis2] = useState(false);
    const [vis3, setVis3] = useState(false);

    useEffect(() => {setVis1(true)})

    const vis = [vis1, vis2, vis3]
    const durations = [2000, 1500, 1000]
    // const set_vis = [setVis1(), setVis2(), setVis3()]

    const handleCallback = (i) => {
        i == 0 ? setTimeout(() => setVis2(true), 500) : null
        i == 1 ? setTimeout(() => setVis3(true), 500) : null
    }

    const content = props.content
    const cols = content.copy.map((value, i) => {
        return (

            <Grid.Column key={i}>
                <Responsive minWidth={425} >
                    {/* Large screen */}
                    <Transition visible={vis[i]} animation='fade' duration={durations[i]} onStart={() => handleCallback(i)}>
                        <div style={{ height: ' 80%' }}>
                            <Segment textAlign='center' style={{ padding: '10%', height: '100%' }}>
                                <HowImage className="how-img" src={content.img_path[i]} style={{ maxWidth: '200px' }}></HowImage>
                                <Header as='h2' textAlign='center'>{i + 1}</Header>
                                <Grid verticalAlign='middle' centered style={{height: '40%'}}>
                                    <Grid.Row stretched>
                                        <Grid.Column textAlign='center'>
                                            {value}
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Segment>
                        </div>
                    </Transition>
                </Responsive>
            </Grid.Column>

        )
    })

    return (
        <Responsive
            fireOnMount
            getWidth={getWidth}
            minWidth={Responsive.onlyTablet.minWidth}>
            <Grid relaxed='very' centered columns={4} stretched style={{ height: '75vh', marginTop: '5rem' }}>
                <Grid.Row style={{ height: '90%' }}>
                    {cols}
                </Grid.Row>
            </Grid>
        </Responsive>
    )
}


export default ResponsiveContainer
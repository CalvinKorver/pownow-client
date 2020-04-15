// import "../style.css"

import { BackgroundImageRow, HeaderContainer, PowHeader } from '../style/style';
import { Container, Grid, Segment } from 'semantic-ui-react';

import { INDEX_VARIANTS } from '../lib';
import { motion } from 'framer-motion';

const HomepageLayout = props => {
    const PowHead = <PowHeader textAlign='center' as='h2'>Instant text messages <br /> for opening ski lifts <br /> to get your fresh powder first.</PowHeader>
    return (
        < motion.div initial="exit" animate="enter" exit="exit" >
            <motion.div variants={INDEX_VARIANTS}>
                {/* <div id='background'> */}


                <Grid className='mobile tablet only' padded style={{ marginTop: '5% !important' }}>
                    <Grid.Column >
                        <HeaderContainer>
                            {PowHead}
                        </HeaderContainer>
                    </Grid.Column>
                </Grid>

                <div id="background">
                    <Grid padded>
                        <Grid.Column width={9} ></Grid.Column>
                        <Grid.Column style={{ marginTop: '8%' }} mobile={16} tablet={8} computer={5} >
                            <Container style={{ maxWidth: '430px', margin: '0 auto' }}>
                                <div style={{ margin: '0 auto' }}>
                                    <Segment style={{ minHeight: '100px', padding: '30px' }}>
                                        {props.children}
                                    </Segment>
                                </div>
                            </Container>
                        </Grid.Column>
                    </Grid>
                </div>
                {/* </div> */}
                <style jsx>{`
        div#background {
            height: 90vh !important;
    background-image: url('/mountain.png') !important;
    background-size: 75% !important;
    background-repeat: no-repeat !important;
    background-position: -4% 125% !important;
    background-opacity: 95% important;
        }`}</style>
            </motion.div>
        </motion.div>
    )
}

export default HomepageLayout;
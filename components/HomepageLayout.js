// import "../style.css"

import { BackgroundImageRow, HeaderContainer, PowHeader } from '../style/style';
import { Container, Grid, Segment } from 'semantic-ui-react';

import {INDEX_VARIANTS} from '../lib';
import { motion } from 'framer-motion';

const HomepageLayout = props => {
    const PowHead = <PowHeader textAlign='center' as='h2'>Instant text messages <br /> for opening ski lifts <br /> to get your fresh powder first.</PowHeader>
    return (
        < motion.div initial="exit" animate="enter" exit="exit" >
            <motion.div variants={INDEX_VARIANTS}>
            <div id='background'>
                <Grid centered >
                    <Grid.Row >
                        <Grid.Column className='mobile tablet only'>
                            <HeaderContainer>
                                {PowHead}

                            </HeaderContainer>
                        </Grid.Column>
                    </Grid.Row>

                    <BackgroundImageRow>

                        <Grid.Column style={{ paddingTop: '10%' }} className='computer only' computer={7}>
                            {PowHead}

                        </Grid.Column>
                        <Grid.Column style={{ paddingTop: '15%' }} mobile={16} tablet={8} computer={6} >
                            <Container>
                                <div style={{ margin: '0 auto', width: '425px' }}>
                                    <Segment style={{ minHeight: '100px', position: 'absolute', transform: 'translateY(-30%)', width: '425px', padding: '30px' }}>
                                        {props.children}
                                    </Segment>
                                </div>
                            </Container>
                        </Grid.Column>
                    </BackgroundImageRow>
                </Grid>
            </div>
            <style jsx>{`
        div#background {
            height: 90vh !important;
    background-image: url('/background.png') !important;
    background-size: 100% !important;
    background-repeat: no-repeat !important;
    background-position: 5% 100% !important;
        }`}</style>
       </motion.div>
       </motion.div>
    )
}

export default HomepageLayout;
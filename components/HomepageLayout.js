// import "../style.css"

import { BackgroundDiv, BackgroundImageRow, HeaderContainer, PowHeader } from '../style/style';
import { Container, Grid, Segment } from 'semantic-ui-react';

import { INDEX_VARIANTS } from '../lib';
import { motion } from 'framer-motion';

const HomepageLayout = props => {
    const PowHead = <PowHeader textAlign='center' as='h2'>Instant text messages <br /> for opening ski lifts <br /> to get your fresh powder first.</PowHeader>
    return (
        <div>
            <Grid className='mobile tablet only' padded style={{ marginTop: '5% !important' }}>
                <Grid.Column >
                    <HeaderContainer>
                        {PowHead}
                    </HeaderContainer>
                </Grid.Column>
            </Grid>

            <Grid className='mobile tablet only' padded style={{}}>
                <Grid.Column width={16}>
                    <Container style={{margin: '0 auto' }}>
                            <div style={{ margin: '0 auto' }}>
                                <Segment style={{ minHeight: '100px', padding: '15px' }}>
                                    {props.children}
                                </Segment>
                            </div>
                        </Container>
                </Grid.Column>
            </Grid>



                <Grid className='computer only' padded>
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
            {/* </BackgroundDiv> */}
        </div>
    )
}

export default HomepageLayout;
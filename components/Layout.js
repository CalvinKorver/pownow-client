// import "../style.css"

import { BackgroundImageRow, HeaderContainer, PowHeader } from '../style/style';
import { Container, Grid, Segment } from 'semantic-ui-react';

import PowMenu from './PowMenu';
import { styled } from "styled-components";

const Layout = props => {
    const PowHead = <PowHeader textAlign='center' as='h2'>Instant text messages <br /> for opening ski lifts <br /> to get your fresh powder first.</PowHeader>
    return (
    <div>
        <PowMenu/>
        <Grid centered >
            <Grid.Row >
                <Grid.Column className= 'mobile tablet only'>
                    <HeaderContainer>
                        {PowHead}
                    </HeaderContainer>
                </Grid.Column>
            </Grid.Row>

            <BackgroundImageRow className='background'>
                <Grid.Column style={{paddingTop: '10%'}}  className='computer only' computer={7}>
                {PowHead}
                </Grid.Column>
                <Grid.Column style={{paddingTop: '15%'}} mobile={16} tablet={8} computer={8} >
                    <Container>
                        <div style={{margin: '0 auto', width:'425px'}}>
                            <Segment style={{position:'absolute', transform: 'translateY(-30%)', width: '425px', padding: '30px'}}>
                        {props.children}
                        </Segment>
                        </div>
                    </Container>
                </Grid.Column>
            </BackgroundImageRow>

            
        </Grid>
    </div>
    )
}

export default Layout;
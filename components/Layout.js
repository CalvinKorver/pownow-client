import { Container, Grid, Segment } from 'semantic-ui-react';
import { HeaderContainer, PowHeader } from '../style/style';

import PowMenu from './PowMenu';
import { styled } from "styled-components";

const Layout = props => (
    <div>
        <PowMenu />
        <Grid  centered >
            <Grid.Row >
                <Grid.Column className= 'mobile tablet only'>
                    <HeaderContainer>
                        <PowHeader textAlign='center' as='h3'>Instant text messages <br /> for opening ski lifts <br /> to get your fresh powder first.</PowHeader>
                    </HeaderContainer>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row style={{paddingTop: '5%', height: '90vh'}} >
                <Grid.Column style={{paddingTop: '10%'}}  className='computer only' computer={8}>
                <PowHeader textAlign='center' as='h3'>Instant text messages <br /> for opening ski lifts <br /> to get your fresh powder first.</PowHeader>
                </Grid.Column>
                <Grid.Column style={{paddingTop: '14%'}} mobile={16} tablet={8} computer={8} >
                    <Container>
                        <div style={{margin: 'auto'}}>
                            <Segment style={{position:'absolute', transform: 'translateY(-30%)', width: '450px', padding: '30px'}}>
                        {props.children}
                        </Segment>
                        </div>
                    </Container>
                </Grid.Column>
            </Grid.Row>

            
        </Grid>
    </div>
);

export default Layout;
import PowMenu from './PowMenu';
import { styled } from "styled-components";
import { Container, Grid, Segment } from 'semantic-ui-react';
import { HeaderContainer, PowHeader } from '../style/style';

const Layout = props => (
    <div>
        <PowMenu />
        <Grid>
            <Grid.Row centered >
                <Grid.Column className= 'mobile only'>
                    <HeaderContainer>
                        <PowHeader textAlign='center' as='h3'>Instant text messages <br /> for opening ski lifts <br /> to get your fresh powder first.</PowHeader>
                    </HeaderContainer>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row centered style={{paddingTop: '5%', height: '90vh'}} >
                <Grid.Column style={{paddingTop: '10%'}}  className='tablet only' computer={8}>
                <PowHeader textAlign='center' as='h3'>Instant text messages <br /> for opening ski lifts <br /> to get your fresh powder first.</PowHeader>
                </Grid.Column>
                <Grid.Column style={{paddingBottom: '10%'}} mobile={16} tablet={8} computer={8} >
                    <Container>
                        <Segment style={{padding: '30px', maxWidth: '500px'}}>
                        {props.children}
                        </Segment>
                    </Container>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>
);

export default Layout;
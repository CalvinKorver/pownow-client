import PowMenu from './PowMenu';
import { styled } from "styled-components";
import { Container, Grid, Segment } from 'semantic-ui-react';
import { HeaderContainer, PowHeader } from '../style/style';

const Layout = props => (
    <div>
        <PowMenu />
        <Grid doubling >
            <Grid.Row centered >
                <Grid.Column className= 'mobile tablet only'>
                    <HeaderContainer>
                        <PowHeader textAlign='center' as='h3'>Instant text messages <br /> for opening ski lifts <br /> to get your fresh powder first.</PowHeader>
                    </HeaderContainer>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row centered style={{paddingTop: '10%'}} >
                <Grid.Column className='large screen only' computer={8}>
                <PowHeader textAlign='center' as='h3'>Instant text messages <br /> for opening ski lifts <br /> to get your fresh powder first.</PowHeader>
                </Grid.Column>
                <Grid.Column mobile={16} tablet={8} computer={8} >
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
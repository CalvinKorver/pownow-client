import PowMenu from './PowMenu';
import {styled} from "styled-components";
import { Container } from 'semantic-ui-react';
import {HeaderContainer, PowHeader} from '../style/style';

const Layout = props => (
    <div>
        <PowMenu />
        <HeaderContainer>
            <PowHeader textAlign='center' as='h3'>Instant text messages <br /> for opening ski lifts <br /> to get your fresh powder first.</PowHeader>
        </HeaderContainer>

        <Container>
            {props.children}
        </Container>
    </div>
);

export default Layout;
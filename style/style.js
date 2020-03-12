import styled from 'styled-components';
import { Header, Form, Button, Container } from 'semantic-ui-react/';

export const MyForm = styled(Form)`&.hidden { display: none; }`;
export const HeaderContainer = styled(Container)`min-height: 175px`;
export const PowHeader = styled(Header)`padding-top: 15%; text-align: center`;
export const BackButton = styled(Button)`margin-top: 20px !important; background: none !important`;
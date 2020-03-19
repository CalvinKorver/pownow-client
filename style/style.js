import { Button, Container, Form, Header, Image } from 'semantic-ui-react/';

import styled from 'styled-components';

export const MyForm = styled(Form)`&.hidden { display: none; }`;
export const HeaderContainer = styled(Container)`min-height: 175px`;
export const PowHeader = styled(Header)`padding-top: 8%; text-align: center`;
export const BackButton = styled(Button)`margin-top: 20px !important; background: none !important`;
export const DifficultyIcon = styled(Image)`max-width: 16px !important; position: relative; bottom: 1px; right: -5px; display: inline-block !important;`;
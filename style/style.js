import { Button, Container, Form, Grid, Header, Image, Menu, Row } from 'semantic-ui-react/';

import styled from 'styled-components';

export const MyForm = styled(Form)`&.hidden { display: none; }`;
export const HeaderContainer = styled(Container)`min-height: 175px`;
export const PowHeader = styled(Header)`padding-top: 8%; text-align: center; line-height: 1.75em;`;
export const BackButton = styled(Button)`margin-top: 20px !important; background: none !important`;
export const DifficultyIcon = styled(Image)`max-width: 16px !important; position: relative; bottom: 1px; right: -5px; display: inline-block !important;`;
export const StyledMenu = styled(Menu)`height: 100px !important; margin-top: 20px !important; padding-left: 40px; padding-right:40px`;
export const RightMenu = styled(Menu.Menu)`margin-left: 0 !important;`;
export const BackgroundImageRow = styled(Grid.Row)`padding-top: 0%;`;
export const HowImage = styled(Image)`max-width: 200px !important; 
max-height:200px !important;
margin: 0 auto;`;
export const LargerP = styled.p`font-size: 24px !important; font-weight: 300`;
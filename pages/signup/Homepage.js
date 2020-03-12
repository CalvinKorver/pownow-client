import Menu from "../../components/Menu";
import { Container, Button, Checkbox, Form, Divider, Header } from 'semantic-ui-react/';
import styled from "styled-components";
import LiftCheckBoxes from '../../components/liftCheckBoxes';
import Link from 'next/link';

import { MyForm, HeaderContainer, PowHeader, BackButton} from '../../style/style';

export default class Homepage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            signup1: true,
            signup2: false,
            signup3: false
        }
    }

    handleNext = (e) => {
        var value = JSON.parse(e.target.value);
        var questionId = value.parent;
        var nextQuestion = value.next;
        this.setState({
            [questionId]: false,
            [nextQuestion]: true
        });
    }

    render() {
        return (
            <div>
                <Menu />
                <HeaderContainer>
                    <PowHeader textAlign='center' as='h3'>Instant text messages <br /> for opening ski lifts <br /> to get your fresh powder first.</PowHeader>
                </HeaderContainer>

                <Container>

                    <MyForm id="signup1" className={this.state.signup1 ? 'signup-form' : 'hidden'}>
                        <Header className="centered" as='h3' >Get started by entering your phone number:</Header>
                        <Form.Field className="centered">
                            <input textAlign="center" placeholder='(720) 564 - 4933' />
                        </Form.Field>
                            <Link href="/signup/selectresort">
                        <Button fluid value={JSON.stringify({ parent: 'signup1', next: 'signup2' })} next="test" type='next' onClick={this.handleNext}>Next</Button>
                        </Link>
                    </MyForm>





                    <MyForm id="signup3" className={this.state.signup3 ? 'signup-form' : 'hidden'}>
                        <Header as='h3'>Which lifts would you like to track?</Header>
                        <LiftCheckBoxes />
                        <Button fluid value={JSON.stringify({ parent: 'signup3', next: 'signup4' })} type='next' onClick={this.handleNext}>Next</Button>
                        <BackButton fluid value={JSON.stringify({ parent: 'signup3', next: 'signup2' })} next="test" type='next' onClick={this.handleNext}>Go Back</BackButton>
                    </MyForm>

                    {/* <MyForm id="signup3" className={this.state.signup3 ? 'signup-form' : 'hidden'}>
                        <Header as='h3'>Which lifts would you like to track?</Header>
                        <Form.Field>
                            <input placeholder='Squaw Valley' />
                        </Form.Field>
                        <Form.Field>
                            <input placeholder='Choose a Date' />
                        </Form.Field>
                        <Button value={JSON.stringify({parent: 'signup4', next: 'signup1'})} type='next' onClick={this.handleNext}>Next</Button>
                    </MyForm> */}
                </Container>
            </div>
        )
    }
}

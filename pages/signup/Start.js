import Menu from "../../components/PowMenu";
import { Container, Button, Checkbox, Form, Divider, Header } from 'semantic-ui-react/';
import styled from "styled-components";
import Link from 'next/link';

import { MyForm, HeaderContainer, PowHeader, BackButton } from '../../style/style';

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
            <MyForm id="signup1" className={this.state.signup1 ? 'signup-form' : 'hidden'}>
                <Header className="centered" as='h3' >Get started by entering your phone number:</Header>
                <Form.Field className="centered">
                    <input textAlign="center" placeholder='(720) 564 - 4933' />
                </Form.Field>
                <Link href="/signup/selectresort">
                    <Button fluid type='next'>Next</Button>
                </Link>
            </MyForm>
        )
    }
}

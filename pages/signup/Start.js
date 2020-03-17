import Menu from "../../components/PowMenu";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Container, Button, Checkbox, Form, Divider, Header } from 'semantic-ui-react/';
import styled from "styled-components";
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux'

import { MyForm, HeaderContainer, PowHeader, BackButton } from '../../style/style';


  
export default class Homepage extends React.Component {

    constructor(props) {
        super(props);
        this.state = { phone: '' }
    }

    handleOnChange = value => {
        this.setState({ phone: value }, () => {
            if (this.state.phone == '+') {
                this.setState({ phone: '+1' });
            }
        });
        console.log(this.state);
    };

    handleSubmit = event => { 
        console.log('in handleSubmit')
        event.preventDefault();
        const { title } = this.state;
        this.props.addArticle({ title });
    }

    render() {
        // const { phone, submit_phone } = useCounter()
        return (
            <MyForm id="signup1">
                <Header className="centered" as='h3' >Get started by entering your phone number:</Header>
                <Form.Field className="centered">
                    <PhoneInput
                        inputStyle={{ textAlign: 'center' }}
                        country={'us'}
                        onlyCountries={['us']}
                        value={this.state.phone}
                        disableDropdown={true}
                        onChange={this.handleOnChange} />
                </Form.Field>
                <Link href="/signup/selectresort">
                    <Button fluid type='submit' onClick={hand}>Next</Button>
                </Link>
            </MyForm>
        )
    }
}

    const Counter = () => {
        const { phone, submit_phone } = useCounter()
        return (
        <div>
            <h1>
            Count: <span>{phone}</span>
            </h1>
        </div>
        )
    }
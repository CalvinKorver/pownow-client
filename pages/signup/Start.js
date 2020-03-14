import Menu from "../../components/PowMenu";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Container, Button, Checkbox, Form, Divider, Header } from 'semantic-ui-react/';
import styled from "styled-components";
import Link from 'next/link';

import { MyForm, HeaderContainer, PowHeader, BackButton } from '../../style/style';

function mapDispatchToProps(dispatch) {
    return {
      addArticle: article => dispatch(addArticle(article))
    };
  }

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
        event.preventDefault();
        const { title } = this.state;
        this.props.addArticle({ title });
    }

    render() {
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
                    <Button fluid type='submit'>Next</Button>
                </Link>
            </MyForm>
        )
    }
}

// const Form = connect(
//     null,
//     mapDispatchToProps
// )(ConnectedForm);

// export default Form;
import { MyForm, HeaderContainer, PowHeader, BackButton } from '../../style/style';
import { Header, Form, Button, Dropdown } from 'semantic-ui-react/';
import Layout from '../../components/Layout';
import Link from 'next/link';


export default function Confirm(props) {

    return (
        <MyForm id="signup3" >
            <Header as='h3'>Which lifts would you like to track?</Header>
            <Form.Field>
                <input placeholder='Squaw Valley' />
            </Form.Field>
            <Form.Field>
                <input placeholder='Choose a Date' />
            </Form.Field>
            {/* <Button value={JSON.stringify({ parent: 'signup4', next: 'signup1' })} type='next' onClick={this.handleNext}>Next</Button> */}
        </MyForm>
    )
}
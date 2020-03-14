import { MyForm, HeaderContainer, PowHeader, BackButton } from '../../style/style';
import { Header, Form, Button, Dropdown } from 'semantic-ui-react/';
import Layout from '../../components/Layout';
import Link from 'next/link';


export default function Confirm(props) {

    return (
        <Layout>
            <MyForm id="signup3" >
                <Header as='h3'>You're setup to track:</Header>
                <p>List Here.</p>

                    <Button type="submit" fluid >Start PowNow</Button>
                <Link href="/signup/lifts">
                    <BackButton fluid >Go Back</BackButton>
                </Link>
            </MyForm>
        </Layout>
    )
}
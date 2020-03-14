import { MyForm, HeaderContainer, PowHeader, BackButton } from '../../style/style';
import { Header, Form, Button, Dropdown } from 'semantic-ui-react/';
import Layout from '../../components/Layout';
import Link from 'next/link';


export default function SelectResort(props) {
    const friendOptions = [
        {
            key: 'squaw',
            text: 'Squaw Valley',
            value: 'squaw',
            image: { src: '/squaw.png' },
        },
    ]

    return (
        <Layout>
            <MyForm id="signup2" >
                <Header as='h3'>Select your ski resort and when you're visiting</Header>
                <Form.Field >
                    <Dropdown
                        placeholder='Select Resort'
                        fluid
                        selection
                        options={friendOptions}
                    />
                </Form.Field>
                <Form.Field>
                    <input placeholder='Choose a Date' />
                </Form.Field>
                <Link href="/signup/lifts">
                    <Button fluid >Next</Button>
                </Link>
                <Link href="/">
                    <BackButton fluid >Go Back</BackButton>
                </Link>
            </MyForm>
        </Layout>
    )
}
import { MyForm, HeaderContainer, PowHeader, BackButton } from '../../style/style';
import { Header, Form, Button, Dropdown } from 'semantic-ui-react/';
import Link from 'next/link';


export default function SelectResort(props) {
    const friendOptions = [
        {
            key: 'squaw',
            text: 'Squaw Valley',
            value: 'squaw',
            image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
        },
    ]

    return (
        <MyForm id="signup2" >
            <Header as='h3'>Select your ski resort and when you're visiting</Header>
            <Form.Field centered>
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
            <BackButton fluid  type='next'>Go Back</BackButton>
        </MyForm>
    )
}
import { BackButton, MyForm } from '../style/style';
import { Dropdown, Form, Header } from 'semantic-ui-react/';
import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

import Layout from './Layout';
import Link from 'next/link';
import { useRouter } from 'next/router'

const ResortComponent = (props) => {
    const router = useRouter()
    const [resort, setResort] = useState('');
    const [date, setDate] = useState('');

    const friendOptions = [
        {
            key: 'squaw',
            text: 'Squaw Valley',
            value: 'SquawValley',
            image: { src: '/squaw.png' },
        },
    ]

    const submit = e => {
        e.preventDefault()
        props.addDate(date)
        props.addLocation(location)
        router.push("/signup/lifts")
    }

    const handleChange = (e, { name, value }) => {
        console.log(value)
        name == 'date' ? setDate(value) : setResort(value)
    }

    return (
        <Layout>
            <MyForm id="signup2" onSubmit={e => submit(e)}>
                <Header as='h3'>Select your ski resort and when you're visiting</Header>
                <Form.Field>
                    <Dropdown
                        placeholder='Select Resort'
                        fluid
                        selection
                        options={friendOptions}
                        onChange={(e, data) => handleChange(e=e,{name: 'resort', value: data.value})}
                    />
                </Form.Field>
                <Form.Input 
                    name = 'date'
                    value = {date}
                    onChange={handleChange}
                    placeholder='Choose a Date'/>
                <Form.Button fluid type='submit'>Next</Form.Button>
                <Link href="/">
                    <BackButton fluid >Go Back</BackButton>
                </Link>
            </MyForm>
        </Layout>
    )
}

export default connect(state => state)(ResortComponent)

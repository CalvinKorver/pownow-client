import { BackButton, MyForm } from '../style/style';
import { Dropdown, Form, Header, Message } from 'semantic-ui-react/';
import React, { useState } from 'react';

import { DEFAULT_VARIANTS } from '../lib';
import HomepageLayout from './HomepageLayout';
import Link from 'next/link';
import { connect } from 'react-redux';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router'

const ResortComponent = (props) => {
    const router = useRouter()
    const [resort, setResort] = useState('');
    const [date, setDate] = useState('');
    const [resortError, setResortError] = useState(false);

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
        setResortError(false)
        if (!resort || !date) {
            setResortError(true);
            return;
        }
        props.addDate(date)
        props.addLocation(resort)
        router.push("/signup/Lifts")
    }

    const handleChange = (e, { name, value }) => {
        console.log(value)
        name == 'date' ? setDate(value) : setResort(value)
    }

    return (
        <HomepageLayout>
            <motion.div initial="exit" animate="enter" exit="exit" >
                <motion.div variants={DEFAULT_VARIANTS}>
                    <MyForm className={resortError ? 'error' : ''} id="signup2" onSubmit={e => submit(e)}>
                        <Header as='h3'>Select your ski resort and when you're visiting</Header>
                        <Form.Field>
                            <Dropdown
                                placeholder='Select Resort'
                                fluid
                                selection
                                options={friendOptions}
                                onChange={(e, data) => handleChange(e = e, { name: 'resort', value: data.value })}
                            />
                        </Form.Field>
                        <Form.Input
                            name='date'
                            value={date}
                            onChange={handleChange}
                            placeholder='Choose a Date' />
                        <Form.Button fluid type='submit'>Next</Form.Button>
                        <Message
                            error
                            header='Validation Error'
                            content='Make sure you select a resort and date.'
                        />
                        <Link href="/">
                            <BackButton fluid >Go Back</BackButton>
                        </Link>
                    </MyForm>
                </motion.div>
            </motion.div>
        </HomepageLayout>
    )
}

export default connect(state => state)(ResortComponent)

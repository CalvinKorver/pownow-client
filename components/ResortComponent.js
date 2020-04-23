import { BackButton, MyForm } from '../style/style';
import { Dropdown, Form, Header, Message } from 'semantic-ui-react/';
import React, { useState } from 'react';

import { DEFAULT_VARIANTS } from '../lib';
import { DateInput } from 'semantic-ui-calendar-react';
import HomepageLayout from './HomepageLayout';
import Link from 'next/link';
import { connect } from 'react-redux';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router'

const ResortComponent = (props) => {
    
    const router = useRouter()
    const [resort, setResort] = useState(props.userData.location);
    const [date, setDate] = useState(props.userData.date);
    const [resortError, setResortError] = useState(false);


    const friendOptions = [
        {
            key: 'squaw',
            text: 'Squaw Valley',
            value: 'SquawValley',
            // image: { src: '/squaw.png' },
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
        name === 'date' ? setDate(value) : setResort(value)
    }

    return (
        <HomepageLayout>
            <motion.div initial="exit" animate="enter" exit="exit" >
                <motion.div variants={DEFAULT_VARIANTS}>
                    <MyForm className={resortError ? 'error' : ''} id="signup2" onSubmit={e => submit(e)}>
                        <Header as='h3'>Select your ski resort and enter the date you are visiting.</Header>
                        <Form.Field>
                            <Dropdown
                            disabled
                                defaultValue={'SquawValley'}
                                placeholder='Select Resort'
                                fluid
                                selection
                                options={friendOptions}
                                onChange={(e, data) => handleChange(e = e, { name: 'resort', value: data.value })}
                            />
                        </Form.Field>
                        <Form.Field>
                        <DateInput
                            name="date"
                            placeholder="Select a date you're visiting"
                            value={date}
                            iconPosition="left"
                            onChange={handleChange}
                            animation='none'
                            dateFormat={'MM-DD-YYYY'}
                            />
                        </Form.Field>
                        {/* <Form.Input
                            name='date'
                            value={date}
                            onChange={handleChange}
                            placeholder='MM-DD-YYYY'/> */}
                        <Form.Button fluid type='submit'>Next</Form.Button>
                        <Message
                            error
                            header='Validation Error'
                            content='Make sure you select a date.'
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

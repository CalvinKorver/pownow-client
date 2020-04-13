import { BackButton, DifficultyIcon, MyForm } from '../style/style';
import { Checkbox, Form, Header, Message } from 'semantic-ui-react/';
import React, { useState } from 'react';

import { DEFAULT_VARIANTS } from '../lib';
import HomepageLayout from './HomepageLayout';
import Link from 'next/link';
import { connect } from 'react-redux';
import { motion } from 'framer-motion';
import styled from "styled-components";
import { useRouter } from 'next/router'

const LiftsComponent = (props) => {

    const router = useRouter()
    const [lifts, setLifts] = useState(props.userData.lifts);
    const [error, setError] = useState(false);

    const handleCheckBox = (value) => {
        const newArray = lifts.map((current, index) => {
            const checkedStatus = current.checked;
            if (current.liftName == value.liftName) {
                const newLift = { liftName: current.liftName, liftDifficulty: current.liftDifficulty, checked: !(current.checked) };
                return newLift
            } else {
                return current
            }
        });
        setLifts(newArray)
    }

    const submit = e => {
        setError(false)
        e.preventDefault()
        if (!lifts.find(o => o.checked === true)) {
            setError(true);
            return;
        }
        props.addLifts(lifts)
        router.push("/signup/Confirm")
    }

    let liftCheckBoxes
    if (lifts) {
        liftCheckBoxes = lifts.map((lift) => (
            <Form.Field key={lift.liftName}>
                <Checkbox onClick={() => handleCheckBox(lift)}
                    checked={lift.checked}
                    value={lift.liftName}
                    label={lift.liftName} />
                {lift.liftDifficulty == 'black' ? <span><DifficultyIcon src='/black-diamond.png'></DifficultyIcon></span> :
                    lift.liftDifficulty == 'blue' ? <span><DifficultyIcon src='/blue-square.png'></DifficultyIcon></span> :
                        <span><DifficultyIcon src='/green-circle.png'></DifficultyIcon></span>}
            </Form.Field>
        ));
    } else {
        liftCheckBoxes = []
    }

    return (
        <HomepageLayout>
            <motion.div initial="exit" animate="enter" exit="exit" >
                <motion.div variants={DEFAULT_VARIANTS}>
                    <MyForm className={error ? 'error' : null} id="signup3" onSubmit={submit}>
                        <Header as='h3'>Which lifts would you like to track?</Header>
                        {liftCheckBoxes}
                        <Message
                            error
                            header='Validation Error'
                            content='Make sure that you select at least one lift!'
                        />
                        <Form.Button fluid type='submit'>Next</Form.Button>
                        <Link href="/signup/selectresort">
                            <BackButton fluid >Go Back</BackButton>
                        </Link>
                    </MyForm>
                </motion.div>
            </motion.div>
        </HomepageLayout>
    )
}

export default connect(state => state)(LiftsComponent)



import { BackButton, DifficultyIcon, MyForm } from '../style/style';
import { Button, Checkbox, Container, Divider, Form, Header } from 'semantic-ui-react/';
import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

import Layout from './Layout';
import Link from 'next/link';
import { addLifts } from '../lib/actions';
import styled from "styled-components";
import { useRouter } from 'next/router'

const LiftsComponent = (props, {handleSubmit}) => {

    const liftNames = [
        { liftName: 'KT22 Express', liftDifficulty: 'black', checked: false},
        { liftName: 'Headwall Express', liftDifficulty: 'black', checked: false },
        { liftName: 'Siberia Express', liftDifficulty: 'black', checked: false },
        { liftName: 'Gold Coast Express', liftDifficulty: 'green', checked: false },
        { liftName: 'Emigrant', liftDifficulty: 'black', checked: false },
        { liftName: 'Big Blue Express', liftDifficulty: 'green', checked: false },
        { liftName: 'Solitude', liftDifficulty: 'blue', checked: false },
        { liftName: 'Granite Chief', liftDifficulty: 'black', checked: false },
        { liftName: 'Broken Arrow', liftDifficulty: 'black', checked: false  },
        { liftName: 'Silverado', liftDifficulty: 'black', checked: false }
    ];

    const router = useRouter()
    const dispatch = useDispatch()
    const [lifts, setLifts] = useState(liftNames);

    const handleCheckBox = (value) => {
        const newArray = liftNames.map((current, index) => {
            if (current.liftName == value.liftName) {
                return { liftName: current.liftName, liftDifficulty: current.liftDifficulty, checked: !current.checked }
            } else {
                return current
            }
        });
        setLifts(newArray)
    }

    const submit = e => {
        e.preventDefault()
        dispatch(addLifts(lifts))
        router.push("/signup/confirm")
    }

    const liftCheckBoxes = liftNames.map((lift) => (
        <Form.Field key={lift.liftName} textAlign='left' >
            <Checkbox onClick={() => handleCheckBox(lift)}
                value={lift.liftName}
                label={lift.liftName} />
            {lift.liftDifficulty == 'black' ? <span><DifficultyIcon src='/black-diamond.png'></DifficultyIcon></span> :
                lift.liftDifficulty == 'blue' ? <span><DifficultyIcon src='/blue-square.png'></DifficultyIcon></span> :
                    <span><DifficultyIcon src='/green-circle.png'></DifficultyIcon></span>}
        </Form.Field>
    ));

    return (
        <Layout>
            <MyForm id="signup3" onSubmit={submit}>
                <Header as='h3'>Which lifts would you like to track?</Header>
                {liftCheckBoxes}
                <Form.Button fluid type='submit'>Next</Form.Button>
                <Link href="/signup/selectresort">
                    <BackButton fluid >Go Back</BackButton>
                </Link>
            </MyForm>
        </Layout>
    )
}

export default connect(state => state)(LiftsComponent)



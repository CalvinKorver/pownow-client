import { BackButton, DifficultyIcon, MyForm } from '../style/style';
import { Button, Checkbox, Container, Divider, Form, Header } from 'semantic-ui-react/';
import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

import Layout from './Layout';
import Link from 'next/link';
import styled from "styled-components";
import { useRouter } from 'next/router'

const LiftsComponent = (props) => {

    const router = useRouter()
    const [lifts, setLifts] = useState(props.userData.lifts);

    const handleCheckBox = (value) => {
        const newArray = lifts.map((current, index) => {
            const checkedStatus = current.checked;
            if (current.liftName == value.liftName) {
                const newLift = {liftName: current.liftName, liftDifficulty: current.liftDifficulty, checked: !(current.checked) };
                return newLift
            } else {
                return current
            }
        });
        setLifts(newArray)
    }

    const submit = e => {
        e.preventDefault()
        props.addLifts(lifts)
        router.push("/signup/confirm")
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



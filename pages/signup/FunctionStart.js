import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { Container, Button, Checkbox, Form, Divider, Header } from 'semantic-ui-react/';
import Link from 'next/link';
import Menu from "../../components/PowMenu";
import { MyForm, HeaderContainer, PowHeader, BackButton } from '../../style/style';

import styled from "styled-components";

const FunctionStart = ({ dispatch }) => {
    let input

    // const setPhoneHandler = event => {
    //     setPhone(event);
    //     if (phone == '+') {
    //         setPhone('+1');
    //     }
    // }

    return (
        <MyForm id="signup1">
            <Header className="centered" as='h3' >Get started by entering your phone number:</Header>
            <Form.Field className="centered">
                <PhoneInput
                    inputStyle={{ textAlign: 'center' }}
                    country={'us'}
                    onlyCountries={['us']}
                    value={phone}
                    disableDropdown={true}
                    onChange={event => setPhoneHandler(event)} />
            </Form.Field>
            <Link href="/signup/selectresort">
                <Button fluid type='submit'>Next</Button>
            </Link>
        </MyForm>
    )
};



export default FunctionStart;



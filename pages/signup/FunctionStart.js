import 'react-phone-input-2/lib/style.css';

import { Form, Header, Message } from 'semantic-ui-react/';
import React, { useState } from 'react';
import { addArea, addCountryCode, addPhone } from '../../lib/actions'
import { useDispatch, useSelector } from 'react-redux';

import { MyForm } from '../../style/style';
import PhoneInput from 'react-phone-input-2';
import { connect } from "react-redux";
import startsWith from 'lodash.startswith';
import styled from "styled-components";
import { useRouter } from 'next/router'

const FunctionStart = (props) => {
    const router = useRouter()
    const dispatch = useDispatch()
    var u = props.userData
    
    const [rawPhone, setRawPhone] = useState(u.countryCode + u.area + u.phone);
    const [phone, setPhone] = useState(u.phone);
    const [area, setArea] = useState(u.area);
    const [countryCode, setCountryCode] = useState(u.countryCode);

    const [error, setError] = useState(false);
    
    let input

    const setPhoneHandler = (value, data, event) => {
        setRawPhone(value);
        value.length > 3 ? setArea(value.substring(4,7)) : null
        value.length > 1 ? setCountryCode(value.substring(1,2)) : null
        value.length > 8 ? setPhone(value.substring(9)) : null
        value.length >= 17 ? setError(false) : null
        if (rawPhone == '+') { setRawPhone('+1'); }
    }

    const submit = e => {
        e.preventDefault()
        setError(false)
        if (rawPhone.length < 12) {
            setError(true);
            return;
        }
        dispatch(addCountryCode(countryCode))
        dispatch(addArea(area))
        dispatch(addPhone(phone))
        router.push('/signup/selectresort')
    }   
    return (
        <div>
            <MyForm className={error ? 'error' : ''} id="signup1" onSubmit={e => submit(e)}>
                <Header className="centered" as='h3' >Get started by entering your phone number:</Header>
                <Form.Field className="centered">
                    <PhoneInput
                        inputStyle={{ textAlign: 'center' }}
                        country={'us'}
                        onlyCountries={['us']}
                        value={rawPhone}
                        disableDropdown={true}
                        onChange={(value, data, event) => setPhoneHandler(value, data, event)} 
                          />
                </Form.Field>
                <Message
                    error
                    header='Validation Error'
                    content='Make sure that you enter a US phone number with an area code.'
                />
                <Form.Button fluid type='submit' disabled={error}>Next</Form.Button>
            </MyForm>
        </div>
    )
};

FunctionStart.getInitialProps = ({ store, isServer, pathname, query }) => {}
export default connect(state => state)(FunctionStart);



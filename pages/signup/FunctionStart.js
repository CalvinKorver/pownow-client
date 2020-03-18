import 'react-phone-input-2/lib/style.css';

import { Form, Header } from 'semantic-ui-react/';
import React, { useState } from 'react';
import { addArea, addPhone } from '../../lib/actions'
import { useDispatch, useSelector } from 'react-redux';

import { MyForm } from '../../style/style';
import PhoneInput from 'react-phone-input-2';
import { connect } from "react-redux";
import styled from "styled-components";
import { useRouter } from 'next/router'

const FunctionStart = (props) => {
    const router = useRouter()
    const [rawPhone, setRawPhone] = useState('+1');
    const dispatch = useDispatch()
    let input

    const setPhoneHandler = (value, data, event) => {

        setRawPhone(value.replace(/[^0-9]+/g,'').slice(data.dialCode.length));
        if (rawPhone == '+') {
            setRawPhone('+1');
        }
        // handleOnChange(value, data, event) {
        //     this.setState({ rawPhone: value.replace(/[^0-9]+/g,'').slice(data.dialCode.length) })
        //   }
    }

    const submit = e => {
        e.preventDefault()
        if (!rawPhone.trim()) { return }
        dispatch(addPhone(rawPhone))
        // dispatch(addArea('206'))
        router.push('/signup/selectresort')
    }

    return (
        <div>
            <p>
                {props.addPhone}
            </p>

            <MyForm id="signup1" onSubmit={e => submit(e)}>
                <Header className="centered" as='h3' >Get started by entering your phone number:</Header>
                <Form.Field className="centered">
                    <PhoneInput
                        inputStyle={{ textAlign: 'center' }}
                        country={'us'}
                        onlyCountries={['us']}
                        value={rawPhone}
                        disableDropdown={true}
                        onChange={(value, data, event) => setPhoneHandler(value, data, event)} />
                </Form.Field>
                <Form.Button type='submit'>Next</Form.Button>
            </MyForm>
        </div>
    )
};

FunctionStart.getInitialProps = ({ store, isServer, pathname, query }) => {}
export default connect(state => state)(FunctionStart);



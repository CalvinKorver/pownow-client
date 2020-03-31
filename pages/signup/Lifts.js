import { BackButton, DifficultyIcon, MyForm } from '../../style/style';
import { Button, Checkbox, Container, Divider, Form, Header } from 'semantic-ui-react/';
import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';

import Layout from '../../components/Layout';
import LiftsContainer from '../../containers/LiftsContainer'
import Link from 'next/link';
import styled from "styled-components";
import { useRouter } from 'next/router'

const Lifts = () => {
    return (
        <LiftsContainer/>
    )
}

Lifts.getInitialProps = async ({res, store}) => {
    console.log('lifts initial props')
    console.log(store.getState().userData)
    if (!store.getState().userData.phone) {
        res.writeHead(301, {
            Location: '/'
        });
        res.end()
    } else if (!store.getState().userData.location) {
        res.writeHead(301, {
            Location: '/pages/selectresort'
        })
    }
    return {}
}

export default connect(state => state)(Lifts)

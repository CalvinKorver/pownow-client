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

export default connect(state => state)(Lifts)

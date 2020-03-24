import { BackButton, DifficultyIcon, HeaderContainer, MyForm } from '../style/style';
import { Button, Form, Header, Image, List } from 'semantic-ui-react/';
import { useEffect, useState } from 'react'

import Layout from './Layout';
import Link from 'next/link';
import { connect } from "react-redux";

// import fetchProducts from '../containers/FetchProducts'

const ConfirmComponent = (props) => {
    let liftsElement;
    const [shouldRender, setShouldRender] = useState(false);
    const [postResponse, setpostResponse] = useState({});

    if (props.userData.lifts) {
        liftsElement = props.userData.lifts.map(lift => {
            if (lift.checked) {
                return (<List.Item>
                    {lift.liftName}
                    {lift.liftDifficulty == 'black' ? <span><DifficultyIcon src='/black-diamond.png'></DifficultyIcon></span> :
                        lift.liftDifficulty == 'blue' ? <span><DifficultyIcon src='/blue-square.png'></DifficultyIcon></span> :
                            <span><DifficultyIcon src='/green-circle.png'></DifficultyIcon></span>}
                </List.Item>)

            } else {
                return null
            }
        });
    } else {
        liftsElement = <p>Choose some lifts first!</p>
    }

    return (
        <Layout>
            <MyForm id="signup3" >
                <Header as='h3'>{props.userData.name} You're setup to track:</Header>
                <List>
                    {liftsElement}
                </List>
                <Header as='h4'>At phone number:</Header>
                <span>{props.userData.phone}</span>
                <Button type="submit" onClick={() => props.postLifts(props.userData)} fluid >Start PowNow</Button>
                <Link href="/signup/lifts">
                    <BackButton fluid >Go Back</BackButton>
                </Link>
            </MyForm>
        </Layout>
    )
}

export default ConfirmComponent

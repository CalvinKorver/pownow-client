import { BackButton, DifficultyIcon, HeaderContainer, MyForm } from '../style/style';
import { Button, Container, Divider, Header, Icon, List, Loader, Message } from 'semantic-ui-react/';
import { useEffect, useState } from 'react'

import Layout from './Layout';
import Link from 'next/link';
import { connect } from "react-redux";

const ConfirmComponent = (props) => {
    let liftsElement;
    const [error, setError] = useState(false);
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

    const handleSubmit = () => {
        setError(false)
        if (!props.userData.phone || !props.userData.location || !props.userData.lifts) {
            setError(true)
            return
        }
        props.startService(props.userData)
    }

    let userDisplay;

    const confirm = (
        <MyForm id="signup3" className={ error? 'error': '' }>
            <Header as='h3'>Confirm Details</Header>
            <Header as='h4'>{props.userData.name} Make sure everything is correct before starting.</Header>
            <Divider hidden />
            <Header as='h4'>Lifts:</Header>
            <List>
                {liftsElement}
            </List>
            <Header as='h4'>
                <span className="unbold" style={{ fontWeight: '100' }}>
                    We'll send you a text message at
                </span>
                <span>{' (' + props.userData.area + ') ' + props.userData.phone}</span>
            </Header>

            <Divider hidden />
                <Message
                    error
                    header='Validation Error'
                    content='Make sure you filled out all the fields before this page!'
                />
            <Button color='green' type="submit" onClick={() => handleSubmit()} fluid disabled={error}>
                Start PowNow
            </Button>
            <Link href="/signup/lifts">
                <BackButton fluid >Go Back</BackButton>
            </Link>
        </MyForm>
    );

    const loading = (
        <Loader active inverted>Sending to server...</Loader>
    )

    const success = (
        <Container textAlign = 'center' >
            <Header as='h3' textAlign="center">Congratulations!</Header>
            <p >Keep an eye out for the confirmation text message.</p>
            <p> Once you confirm the text, you're strapped in!</p>
            <Icon name='mobile alternate' size='big'></Icon>
        </Container>
    )

    if (props.service.success) {
        userDisplay = success
    } else if (props.service.pending) {
        userDisplay = loading
    } else {
        userDisplay = confirm;
    }
    return (
        <HomepageLayout>
            {userDisplay}
        </HomepageLayout>
    )
}

export default ConfirmComponent

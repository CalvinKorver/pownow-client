import { Container, Button, Checkbox, Form, Divider, Header } from 'semantic-ui-react/';
import { MyForm, HeaderContainer, PowHeader, BackButton } from '../../style/style';
import styled from "styled-components";
import Layout from '../../components/Layout';
import Link from 'next/link';

export default class Lifts extends React.Component {

    constructor(props) {
        super(props);

        const liftNames = ['KT22 Express', 'Headwall Express', 'Siberia Express',
            'Gold Coast Express', 'Emigrant', 'Big Blue Express', 'Shirley Lake Express',
            'Solitude', 'Granite Chief', 'Broken Arrow', 'Silverado'];

        this.state = {};

        liftNames.forEach((value) => {
            this.state[value] = false;
        });
    }

    handleCheckBox = (e) => {
        console.log(e.value);
        this.setState({
            [e.value]: true
        });
    }

    render() {

        const liftNames = [
            {liftName: 'KT22 Express', liftDifficulty: 'black'},
            {liftName: 'Headwall Express', liftDifficulty: 'black'},
            {liftName: 'Siberia Express', liftDifficulty: 'black'},
            {liftName: 'Gold Coast Express', liftDifficulty: 'green'},
            {liftName: 'Emigrant', liftDifficulty: 'black'},
            {liftName: 'Big Blue Express', liftDifficulty: 'green'},
            {liftName: 'Shirley Lake Express', liftDifficulty: 'blue'},
            {liftName: 'Solitude', liftDifficulty: 'blue'},
            {liftName: 'Granite Chief', liftDifficulty: 'black'},
            {liftName: 'Broken Arrow', liftDifficulty: 'black'},
            {liftName: 'Silverado', liftDifficulty: 'black'}
        ];

        const liftCheckBoxes = liftNames.map((lift) => (
            <Form.Field key={lift.liftName} textAlign='left' >
                <Checkbox onClick={this.handleCheckBox}
                    value={lift.liftName} 
                    label={lift.liftName} />
                    {lift.liftDifficulty == 'black' ? <span> (Black)</span> : 
                    lift.liftDifficulty == 'blue' ? <span> (Blue)</span> : 
                    <span> (Green)</span>}
            </Form.Field>
        ));

        return (
            <Layout>
                <MyForm id="signup3">
                    <Header as='h3'>Which lifts would you like to track?</Header>

                    {liftCheckBoxes}
                    <Link href="/signup/confirm">
                        <Button fluid >Next</Button>
                    </Link>
                    <Link href="/signup/selectresort">
                        <BackButton fluid >Go Back</BackButton>
                    </Link>
                </MyForm>
            </Layout>
        )
    }

}

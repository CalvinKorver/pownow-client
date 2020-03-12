import Menu from "./Menu";
import { Container, Button, Checkbox, Form, Divider, Header } from 'semantic-ui-react/';
import styled from "styled-components";

export default class liftCheckBoxes extends React.Component {

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

        const liftNames = ['KT22 Express', 'Headwall Express', 'Siberia Express',
            'Gold Coast Express', 'Emigrant', 'Big Blue Express', 'Shirley Lake Express',
            'Solitude', 'Granite Chief', 'Broken Arrow', 'Silverado'];

        const liftCheckBoxes = liftNames.map((liftName) => (
            <Form.Field key={liftName} >
                <Checkbox onClick={this.handleCheckBox} value={liftName} label={liftName} />
            </Form.Field>
        ));

        return (
            <div>
                {liftCheckBoxes}
            </div>
        )
    }
}

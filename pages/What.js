import { Column, Grid, Header, Row, Segment } from "semantic-ui-react"
import { HowImage, LargerP } from "../style/style"

import PowMenu from "../components/PowMenu"

const What = () => {
    return (
        <div>
            <PowMenu />
            <Grid textAlign='center' style={{ marginTop: '8%' }}>
                <Grid.Row centered columns={4} >
                    <Grid.Column>
                        <Segment textAlign='center' style={{ padding: '60px' }}>
                            <HowImage className="how-img" src='/cablecar.png'></HowImage>
                            <Header as='h2' textAlign='center'>1</Header>
                            <div>
                                <LargerP>Identify lifts you want to <br /> be notified for and sign up</LargerP>
                            </div>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment  textAlign='center' style={{ padding: '60px' }}>
                            <HowImage className="how-img" src='/cellphone.png'></HowImage>
                            <Header as='h2' textAlign='center'>2</Header>
                            <div>
                                <LargerP>When your lift opens, <br/>we will send you a text <br/>within seconds!</LargerP>
                            </div>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment  textAlign='center' style={{ padding: '60px' }}>
                            <HowImage className="how-img" src='/skier.png'></HowImage>
                            <Header as='h2' textAlign='center'> 3</Header>
                            <div>
                                <LargerP>Go shred!</LargerP>
                            </div>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </div>
    )
}

export default What
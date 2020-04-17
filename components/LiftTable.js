import { Divider, Grid, Responsive, Table } from 'semantic-ui-react';

import { DifficultyIcon } from '../style/style';
import Weather from './Weather'
import _ from 'lodash'
import { motion } from 'framer-motion';
import { useState } from "react";

const LiftTable = (props, {children, getWidth}) => {
    const [lifts, setLifts] = useState(props.lifts);
    const [column, setColumn] = useState();
    const [direction, setDirection] = useState();

    const handleSort = (clickedColumn) => {
        if (column != clickedColumn) {
            setColumn(clickedColumn)
            setLifts(_.sortBy(lifts, [clickedColumn]))
            setDirection('ascending')
            return
        }

        setLifts(lifts.reverse()),
            setDirection(direction === 'ascending' ? 'descending' : 'ascending')
    }

    return (
        <div>
            <DesktopTable 
                getWidth={getWidth} 
                content={props.content} 
                lifts={lifts} 
                column={column} 
                direction={direction}
                handleSort={handleSort}>{children} </DesktopTable>

            <MobileTable 
                getWidth={getWidth} 
                content={props.content} 
                lifts={lifts} 
                column={column} 
                direction={direction}
                handleSort={handleSort}>{children} </MobileTable>

            
            {/* <MobileContainer getWidth={getWidth} content={props.content}>{children} </MobileContainer> */}
        </div>
    )
}

const DesktopTable = (props, { children, getWidth }) => {
    console.log(getWidth)
    const column = props.column
    const direction = props.direction
    const table_rows = props.lifts.map((value, index) => {
        return (
            <Table.Row key={index}>
                <Table.Cell >{value.LiftName}</Table.Cell>
                <Table.Cell><LiftDifficulty difficulty={value.Difficulty} /></Table.Cell>
                <Table.Cell>{value.Status}</Table.Cell>
            </Table.Row>
        )
    })
    return (
        <Responsive
        fireOnMount
        getWidth={getWidth}
        minWidth={Responsive.onlyTablet.minWidth}>
            <Table attached='top' basic padded fixed color={'green'}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell width={12}>
                            Squaw Valley
                        </Table.HeaderCell>
                        <Table.HeaderCell width={4}>
                            <Weather weather={props.weather} />
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
            </Table>

            <Table attached='bottom' sortable celled fixed compact>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell
                            sorted={column === 'LiftName' ? direction : null}
                            onClick={() => props.handleSort('LiftName')}
                            width={8}>
                            Lift Name
                    </Table.HeaderCell>

                        <Table.HeaderCell
                            sorted={column === 'Difficulty' ? direction : null}
                            onClick={() => props.handleSort('Difficulty')}
                            width={3}>
                            Difficulty
                    </Table.HeaderCell>

                        <Table.HeaderCell
                            sorted={column === 'Status' ? direction : null}
                            onClick={() => props.handleSort('Status')}
                            width={5}>
                            Status
                    </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {table_rows}
                </Table.Body>
            </Table>
        </Responsive>
    )
}

const MobileTable = (props, { children, getWidth }) => {
    const column = props.column
    const direction = props.direction
    const table_rows = props.lifts.map((value, index) => {
        return (
            <Table.Row key={index}>
                <Table.Cell >
                <LiftDifficulty 
                    difficulty={value.Difficulty} />
                    <span style={{position: 'relative', left: '5%'}}>
                        {value.LiftName}
                    </span>
                    <span style={{position: 'relative', left: '8%', fontWeight: '400'}}>
                    is {value.Status}
                    </span>
                </Table.Cell>
            </Table.Row>
        )
    })
    return (
        <Responsive
        fireOnMount
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}>
            <Table attached='top' basic padded fixed color={'green'}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>
                            Squaw Valley
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
            </Table>

            <Table attached='bottom' sortable celled fixed compact>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell
                            sorted={column === 'LiftName' ? direction : null}
                            onClick={() => props.handleSort('LiftName')}
                            width={8}>
                            Lift Name
                    </Table.HeaderCell>

                        {/* <Table.HeaderCell
                            sorted={column === 'Difficulty' ? direction : null}
                            onClick={() => props.handleSort('Difficulty')}
                            width={3}>
                            Difficulty
                    </Table.HeaderCell>

                        <Table.HeaderCell
                            sorted={column === 'Status' ? direction : null}
                            onClick={() => props.handleSort('Status')}
                            width={5}>
                            Status
                    </Table.HeaderCell> */}
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {table_rows}
                </Table.Body>
            </Table>
        </Responsive>
    )
}

const LiftDifficulty = ({ difficulty }) => {
    const dash_style = { marginLeft: '10px', position: 'relative', top: '1.5px', fontSize: '16px' }
    switch (difficulty) {
        case 'expert':
            return (<DifficultyIcon src='/black-diamond.png'></DifficultyIcon>)
            break;
        case 'intermediate':
            return (<DifficultyIcon src='/blue-square.png'></DifficultyIcon>)
        case 'beginner':
            return (<DifficultyIcon src='/green-circle.png'></DifficultyIcon>)
        case 'beginner/intermediate':
            return (<span>
                <DifficultyIcon src='/green-circle.png'></DifficultyIcon>
                <span style={dash_style}>/</span>
                <DifficultyIcon src='/blue-square.png'></DifficultyIcon>
            </span>)
        case 'intermediate/expert':
            return (<span>
                <DifficultyIcon src='/blue-square.png'></DifficultyIcon>
                <span style={dash_style}>/</span>
                <DifficultyIcon src='/black-diamond.png'></DifficultyIcon>
            </span>)
        default:
            return (null)
            break;
    }
}

export default LiftTable
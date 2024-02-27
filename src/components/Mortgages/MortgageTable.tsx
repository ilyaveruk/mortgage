import React from 'react';
import {Container, Table} from "react-bootstrap";


/**
 * Mortgage commissions table
 * Displays a table highlighting the recommended bank choice for the user,
 * based on the information given in the mortgage form
 * @constructor
 */
const MortgageTable = () => {
    return (
        <Container className={"py-3"}>
            <p>הכי כדאי מבחינת עמלות - אופצייה ג' בנק לאומי</p>
            <Table striped>
                <thead>
                <tr>
                    <th></th>
                    <th>אופציה א'</th>
                    <th>אופציה ב'</th>
                    <th style={{color: 'green'}}>אופציה ג'</th>
                    <th>אופציה ד'</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td></td>
                    <td>בנק הפועלים</td>
                    <td>בנק מזרחי</td>
                    <td>בנק לאומי</td>
                    <td>בנק אגוד</td>
                </tr>
                <tr>
                    <td>עמלת פקיד</td>
                    <td>1.2%</td>
                    <td>5.6%</td>
                    <td>7%</td>
                    <td>1%</td>
                </tr>
                <tr>
                    <td>עמלת פעולה</td>
                    <td>0%</td>
                    <td>84 ש"ח לשנה</td>
                    <td>0%</td>
                    <td>0.24% בשנה</td>
                </tr>
                </tbody>
            </Table>
            <p>*הערכה בלבד</p>
        </Container>

    );
}

export default MortgageTable;
import React, { Component } from 'react';
import Calc from './calc';

const result = new Calc()

class Result extends Component {
    render() {
        return <div>Сумма 10+10: {result.summ(10,10)}, Вычитание 100-10: {result.substr(100,10)}, Умножение 10*10: {result.mult(10,10)}, Деление 100/10: {result.division(100,10)}</div>
    }
}
export default Result;

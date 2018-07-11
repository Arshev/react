import React from 'react';
import ReactDOM from 'react-dom';

import Hello from './src/Hello';
import Calc from './src/calc'

const result = new Calc()
console.log(result.summ(10,10))
console.log(result.substr(20,10))
console.log(result.mult(10,10))
console.log(result.division(10,5))

ReactDOM.render(
    <Hello />,
    document.getElementById('root')
);
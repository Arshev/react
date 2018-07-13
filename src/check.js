import React, { Component } from 'react';

class Order {
    constructor() {
        this.arr = [];
    }
    add(title, quantity, cost) {
        let obj = {};
        obj.title = title;
        obj.quantity = quantity;
        obj.cost = cost;
        this.arr.push(obj);
    }
    delete() {
        this.arr.pop();
    }
    itr() {
        var arr2 = [];
        for (let index = 0; index < order.arr.length; index++) {
            const element = order.arr[index];    
            arr2.push(`Title: ${element.title}, Quantity: ${element.quantity}, Cost: ${element.cost}, Total: ${element.quantity * element.cost}$`);
        };
        return arr2;
    }
};

var order = new Order;
order.add("Apple", 2, 10);
order.add("Onion", 5, 20);
order.add("Pinapple", 10, 1);
order.delete();

export class Check extends Component {
    render() {
        return <div>{order.itr()}</div>
    }
};

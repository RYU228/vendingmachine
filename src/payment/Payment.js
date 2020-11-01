import { render } from '@testing-library/react';
import React from 'react';
import "./Payment.css"

class Payment extends React.Component {
    state = {
        data: []
    }

    render() {
        const {data} = this.props;
        return (
            <div className="payment_list">
                <img src={data.url} alt={data.name}/>
                <span className="list_name">{data.name}</span>
                <span className="list_price">{data.price}</span>
            </div>
        );
    }
}

export default Payment;
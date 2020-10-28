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
            // {/* <div className="payment_total">
            //     <div className="total_container">
            //         <div className="total_title">총 액</div>
            //         <div className="total_price">{data.price}원</div>
            //     </div>
            //     <div className="payment">
            //         <span>결 제</span>
            //     </div>
            // </div> */}
        );
    }
}

export default Payment;
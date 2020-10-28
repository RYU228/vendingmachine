import React from 'react';
import "./Menu.css";

class Menu extends React.Component {
    handleMenuClick = () => {
        const {id, onClick} = this.props;
        onClick(id);
    }

    render() {
        const {id, name, sort, price, url, onClick} = this.props;

        return (
        <div className="menu_container" onClick={this.handleMenuClick}>
            <img src={url} alt={name} title={name}/>
            <span className="menu_name">{name}</span>
            <span className="menu_price">{price}원</span>
        </div>
        )
    }
}

export default Menu;
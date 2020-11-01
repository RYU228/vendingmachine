import React from 'react';
import "./Navigation.css";

class Navigation extends React.Component {
    handleMealClick = () => {
        const {onClick} = this.props;
        onClick("meal");
    }

    handleSnackClick = () => {
        const {onClick} = this.props;
        onClick("snack");
    }

    handleBeverageClick = () => {
        const {onClick} = this.props;
        onClick("beverage");
    }

    render() {
        return (
        <div className="navBar">
            <ul className="navBar_ul">
                <li className="navBar_li" onClick={this.handleMealClick}>식 사</li>
                <li className="navBar_li" onClick={this.handleSnackClick}>간 식</li>
                <li className="navBar_li" onClick={this.handleBeverageClick}>음 료</li>
            </ul>
        </div>
        )
    }
}

export default Navigation;
import React from 'react';
import "./Navigation.css";

function Navigation() {
    return (
        <div className="navBar">
            <ul className="navBar_ul">
                <li className="navBar_li">식 사</li>
                <li className="navBar_li">간 식</li>
                <li className="navBar_li">음 료</li>
            </ul>
        </div>
    )
}

export default Navigation;
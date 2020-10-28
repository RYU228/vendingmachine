import React from 'react';
import Menu from "./Menu/Menu";
import Header from "./Header/Header";
import Navigation from "./Navigation/Navigation";
import Payment from "./payment/Payment";
import meal1 from "./Menu/image/meal1.jpg";
import './App.css';

class App extends React.Component {
  state = {
    menu: [{
      id: 0,
      name: "menu1",
      sort: "meal",
      price: 3000,
      url: meal1
    },
    {
      id: 1,
      name: "menu2",
      sort: "meal",
      price: 3500,
      url: meal1
          },
          {
            id: 3,
            name: "menu1",
            sort: "meal",
            price: 3000,
            url: meal1
          },
          {
            id: 4,
            name: "menu2",
            sort: "meal",
            price: 3500,
            url: meal1
                }
                ,
          {
            id: 5,
            name: "menu2",
            sort: "meal",
            price: 3500,
            url: meal1
                }
  ],
  selectedMenuList: []
  }

  handleMenuClick = (id) => {
    const selectedMenu = this.state.menu.filter(item => item.id === id);
    this.setState({selectedMenuList: this.state.selectedMenuList.concat(selectedMenu)});
  }

  render() {
    const {menu, selectedMenuList} = this.state;
    let total_price = 0;
    selectedMenuList.forEach(item => {
      total_price = total_price + item.price;
    })
    return (
      <div>
        <Header />
        <Navigation />
        <div className="menu">
          {menu.map(item => <Menu key={item.id} id={item.id} name={item.name} sort={item.sort} price={item.price} url={item.url} onClick={this.handleMenuClick}/>)}
        </div>
        <div className="app_payment">
          <div className="app_payment_list">
            {selectedMenuList.map(selectedMenu => <Payment key={selectedMenu.id} data={selectedMenu}/>)}
          </div>
          <div className="payment_total">
          <div className="total_container">
            <div className="total_title">총 액</div>
            <div className="total_price">{total_price}원</div>
          </div>
          <div className="payment">
            <span>결 제</span>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Order from './Order';
import MenuAdmin from './MenuAdmin';
import sampleBurgers from '../sample-burgers';
import Burger from './Burger';
import base from '../base';
import SignIn from './auth/SignIn';
import firebase from 'firebase';

class App extends Component {
  static propTypes = {
    match: PropTypes.object,
  };

  state = {
    burgers: {},
    order: {},
  };

  componentDidMount() {
    const { params } = this.props.match;

    const localStorageRef = localStorage.getItem(params.restaurantId);
    if (localStorageRef) {
      this.setState({ order: JSON.parse(localStorageRef) });
    }

    this.ref = base.syncState(`${params.restaurantId}/burgers`, {
      context: this,
      state: 'burgers',
    });
  }

  componentDidUpdate() {
    const { params } = this.props.match;
    localStorage.setItem(params.restaurantId, JSON.stringify(this.state.order));
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  handleLogout = async () => {
    await firebase.auth().signOut();
    window.location.reload();
  };

  addBurger = burger => {
    // Сделали копию объекта state
    const burgers = { ...this.state.burgers };
    burgers[`burger${Date.now()}`] = burger;
    this.setState({ burgers });
  };

  updatedBurger = (key, updatedBurger) => {
    const burgers = { ...this.state.burgers };
    burgers[key] = updatedBurger;
    this.setState({ burgers });
  };

  deleteBurger = key => {
    const burgers = { ...this.state.burgers };
    burgers[key] = null;
    this.setState({ burgers });
  };

  deleteFromOrder = key => {
    const order = { ...this.state.order };
    delete order[key];
    this.setState({ order });
  };

  sampleBurgers = () => {
    this.setState({ burgers: sampleBurgers });
  };

  addToOrder = key => {
    const order = { ...this.state.order };
    // Добавление в объект по ключу
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  };

  render() {
    return (
      <div className="burger-paradise">
        <div className="menu">
          <Header title="Very Hot Burger" />
          <ul className="burgers">
            {Object.keys(this.state.burgers).map(key => {
              return (
                <Burger
                  key={key}
                  index={key}
                  details={this.state.burgers[key]}
                  addToOrder={this.addToOrder}
                />
              );
            })}
          </ul>
        </div>
        <Order {...this.state} deleteFromOrder={this.deleteFromOrder} />
        <MenuAdmin
          addBurger={this.addBurger}
          sampleBurgers={this.sampleBurgers}
          burgers={this.state.burgers}
          updatedBurger={this.updatedBurger}
          deleteBurger={this.deleteBurger}
          handleLogout={this.handleLogout}
        />
      </div>
    );
  }
}

export default App;

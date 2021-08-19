import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddBurgerForm from './AddBurgerForm';
import EditBurgerForm from './EditBurgerForm';

class MenuAdmin extends Component {
  static propTypes = {
    burgers: PropTypes.object,
    deleteBurger: PropTypes.func,
    updateBurger: PropTypes.func,
    addBurger: PropTypes.func,
    sampleBurgers: PropTypes.func,
  };

  render() {
    return (
      <div className="menu-admin">
        <div className="login-header">
          <div className="avatar">
            <img src="/images/avatar.png" alt="avatar" />
          </div>
          <button onClick={this.props.handleLogout} className="buttonLogout">
            Выйти
          </button>
        </div>
        <h2>Управление Меню</h2>
        {Object.keys(this.props.burgers).map(key => {
          return (
            <EditBurgerForm
              key={key}
              id={key}
              burger={this.props.burgers[key]}
              updatedBurger={this.props.updatedBurger}
              deleteBurger={this.props.deleteBurger}
            />
          );
        })}
        <AddBurgerForm addBurger={this.props.addBurger} />
        <button onClick={this.props.sampleBurgers}>Загрузить Бургеры</button>
      </div>
    );
  }
}
export default MenuAdmin;

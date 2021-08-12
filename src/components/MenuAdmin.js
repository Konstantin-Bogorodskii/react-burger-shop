import React, { Component } from 'react';
import AddBurgerForm from './AddBurgerForm';
import EditBurgerForm from './EditBurgerForm';

class MenuAdmin extends Component {
  render() {
    return (
      <div className="menu-admin">
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

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EditBurgerForm extends Component {
  static propTypes = {
    burger: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      desc: PropTypes.string,
      status: PropTypes.string,
    }),
    index: PropTypes.string,
    deleteBurger: PropTypes.func,
    updatedBurger: PropTypes.func,
  };

  handleChange = e => {
    const updatedBurger = {
      // Получаем все значения объекта бургер
      ...this.props.burger,
      // Динамически меняем значения инпута на новые
      [e.currentTarget.name]:
        e.currentTarget.name === 'price'
          ? parseFloat(e.currentTarget.value) || 0
          : e.currentTarget.value,
    };
    this.props.updatedBurger(this.props.id, updatedBurger);
  };

  render() {
    return (
      <div className="burger-edit">
        <input
          name="name"
          type="text"
          value={this.props.burger.name}
          onChange={this.handleChange}
        />
        <input
          name="price"
          type="text"
          value={this.props.burger.price}
          onChange={this.handleChange}
        />
        <select
          name="status"
          className="status"
          value={this.props.burger.status}
          onChange={this.handleChange}
        >
          <option value="available">Доступно!</option>
          <option value="unavailable">Не Доступно!</option>
        </select>
        <textarea name="desc" value={this.props.burger.desc} onChange={this.handleChange}>
          {' '}
        </textarea>
        <input
          name="image"
          type="text"
          value={this.props.burger.image}
          onChange={this.handleChange}
        />
        <button onClick={() => this.props.deleteBurger(this.props.id)}>Удалить из меню</button>
      </div>
    );
  }
}
export default EditBurgerForm;

import React, { Component } from 'react';

class EditBurgerForm extends Component {
  handleChange = e => {
    const updatedBurger = {
      // Получаем все значения объекта бургер
      ...this.props.burger,
      // Динамически меняем значения инпута на новые
      [e.currentTarget.name]: e.currentTarget.value,
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

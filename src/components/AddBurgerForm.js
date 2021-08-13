import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddBurgerForm extends Component {
  static propTypes = {
    addBurger: PropTypes.func,
  };

  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createBurger = e => {
    e.preventDefault();
    const burger = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value || 0),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value,
    };
    this.props.addBurger(burger);
    e.currentTarget.reset();
  };

  render() {
    return (
      <form className="burger-edit" onSubmit={this.createBurger}>
        <input type="text" name="name" placeholder="Name" autoComplete="off" ref={this.nameRef} />
        <input
          type="number"
          name="price"
          placeholder="Price"
          autoComplete="off"
          ref={this.priceRef}
        />
        <select name="status" className="status" ref={this.statusRef}>
          <option value="available">Доступно</option>
          <option value="unavailable">Не доступно</option>
        </select>
        <textarea name="desc" placeholder="Desc" ref={this.descRef} />
        <input
          type="text"
          name="image"
          placeholder="Image"
          autoComplete="off"
          ref={this.imageRef}
        />
        <button type="submit">+ Добавить в Меню</button>
      </form>
    );
  }
}

export default AddBurgerForm;

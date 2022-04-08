import React, { Component } from "react";

class RadioButton extends Component {
  render() {
    const { value, handleGenerico } = this.props;

    return (
        <div className="checkbox">
          <label htmlFor="moradia">
          <input
            type="radio"
            name="moradia"
            value={value}
            onChange={handleGenerico}
            />Casa
          <input
            type="radio"
            name="moradia"
            value={value}
            onChange={handleGenerico}
          />Apartamento
          </label>
        </div>
    );
  }
}

export default RadioButton;

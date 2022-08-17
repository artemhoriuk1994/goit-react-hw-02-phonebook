
import { nanoid } from "nanoid";
import React, { Component } from "react";

export class Form extends Component {
    state = {
        name: '',
        number: ''
    };

    nameInputID = nanoid();
    numberInputID = nanoid();

    onContactChange = event => {
        const { name, value } = event.currentTarget
        this.setState({ [name]: value })
    }

    reset = () => {
        this.setState({ name: '', number: '' });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state)
        this.reset()
    }

    render() {
        const { name, number } = this.state
        const { onContactChange, handleSubmit } = this
        return (
            <form onSubmit={handleSubmit}>
                <label htmlFor={this.nameInputID} >
                    Name </label>
                <input
                    type="text"
                    value={name}
                    onChange={onContactChange}
                    name="name"
                    id={this.nameInputID}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />

                <label htmlFor={this.numberInputID}>
                    Phone  </label>
                <input
                    type="tel"
                    name="number"
                    value={number}
                    id={this.numberInputID}
                    onChange={onContactChange}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />

                <button type="submit">Add contact</button>
            </form>
        )
    }
}
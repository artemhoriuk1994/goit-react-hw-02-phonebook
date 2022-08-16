
import React, { Component } from "react";

export class Form extends Component {
    state = {
        name: '',
        number: ''
    };

    onNContactChange = event => {
        const { name, value, number } = event.currentTarget
        this.setState({ [name]: value, [number]: value })
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
        const { onNContactChange, handleSubmit } = this
        return (
            <form onSubmit={handleSubmit}>
                <label >
                    Name
                    <input
                        type="text"
                        value={name}
                        onChange={onNContactChange}
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
                <label>
                    Phone
                    <input
                        type="tel"
                        name="number"
                        value={number}
                        onChange={onNContactChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                <button type="submit">Add contact</button>
            </form>
        )
    }
}
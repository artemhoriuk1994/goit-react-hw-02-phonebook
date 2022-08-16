import React, { Component } from "react";
import ContactsList from "./ContactsList";
import { Form } from "./Contacts/ContactsForm";
import { nanoid } from "nanoid";

export class App extends Component {
  state = {
    contacts: [],
  };

  onFormSubmit = data => {
    this.setState({ contacts: [...this.state.contacts, { name: data.name, id: nanoid(), number: data.number }] })
    console.log(this.state)
  }
  render() {
    const { contacts } = this.state;
    return (
      <>
        <Form onSubmit={this.onFormSubmit} />
        <ContactsList contacts={contacts} />
      </>
    )
  }
}
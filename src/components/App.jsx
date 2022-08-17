import React, { Component } from "react";
import ContactsList from "./ContactsList";
import { Form } from "./Contacts/ContactsForm";
import Title from './Title/Title'
import { nanoid } from "nanoid";
import Filter from "./Filter";

export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  };

  onChangeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value })
  }

  onFormSubmit = data => {
    const personalData = {
      name: data.name,
      id: nanoid(),
      number: data.number
    }

    this.isIncludeName(personalData.name) ?
      alert(`${data.name} is alredy in your contacts`) :
      this.setState(({ contacts }) => ({ contacts: [...contacts, personalData] }))

  }

  deleteContact = (contactId) => {
    this.setState(prevsState => ({
      contacts: prevsState.contacts.filter(contact => contact.id !== contactId)
    }
    ))
  }

  isIncludeName = (inputName) => {
    return this.state.contacts.find(
      contact => contact.name.toLowerCase() === inputName.toLowerCase()
    )
  }

  render() {
    const { contacts, filter } = this.state;
    const { onFormSubmit, onChangeFilter, deleteContact } = this;

    const normalizeFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
    return (
      <>
        <Title title='Phonebook' />
        <Form onSubmit={onFormSubmit} />
        <Title title='Contacts' />
        <Filter onChangeFilter={onChangeFilter} value={filter} />
        <ContactsList contacts={visibleContacts} onDelete={deleteContact} />
      </>
    )
  }
}
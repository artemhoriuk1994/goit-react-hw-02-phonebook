import React, { Component } from "react";
import { nanoid } from "nanoid";

import ContactsList from "./ContactsList";
import { Forms } from "./Contacts/ContactsForm";
import Filter from "./Filter";
import Section from "./Section/Section";

import { Container } from "./App.styled";
import { GlobalStyles } from "./GlobabalStyles";


export class App extends Component {
  state = {
    contacts: [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
    filter: ''
  };

  onChangeFilter = (input) => {
    this.setState({ filter: input })
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
        <Container>
          <Section title='Phonebook' >
            <Forms onSubmit={onFormSubmit} />
          </Section>
        </Container>
        <Container>
          <Section title='Contacts' >
            <Filter onChangeFilter={onChangeFilter} filter={filter} />
            {contacts.length > 0 ? <ContactsList contacts={visibleContacts} onDelete={deleteContact} /> : <p>Your phone book is empty</p>}

          </Section>
        </Container>
        <GlobalStyles />
      </>
    )
  }
}
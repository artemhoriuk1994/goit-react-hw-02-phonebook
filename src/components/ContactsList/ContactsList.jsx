import PropTypes from 'prop-types'
const ContactsList = ({ contacts, onDelete }) => {
    return (
        <ul>{contacts.map(contact => (
            <li key={contact.id}>{contact.name}: {contact.number}
                <button type='button' onClick={() => onDelete(contact.id)}>Delete</button>
            </li>
        ))}</ul>
    )
}

ContactsList.propTypes = {
    contact: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            contact: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired
        })
    )
}
export default ContactsList;
// import { Component } from 'react';
import css from './ContactForm.module.css'; // стилізація
import PropTypes from 'prop-types'; // типізація
import { useState } from 'react';

export const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNamber] = useState('');

  const onChangeInput = e => {
    const { name, value } = e.currentTarget;
    name === 'name' ? setName(value) : setNamber(value);   //порівнюю стейт з властивістю name в input щоб визначити який міняти
    // або через свіч
    
    // switch (name) {
    //   case 'name':
    //     setName(value);
    //     break;

    //   case 'number':
    //     setNamber(value);
    //     break;
    //   default:
    //     return;
    // }
  };

  const handleSubmit = e => {
    e.preventDefault();
    addContact({ name, number });
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNamber('');
  };

  return (
    <form className={css.formstyle} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name
        <br />
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          onChange={onChangeInput}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
        />
      </label>
      <br />
      <label htmlFor="">
        Number
        <br />
        <input
          className={css.input}
          type="tel"
          name="number"
          value={number}
          onChange={onChangeInput}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <br />
      <button className={css.button} type="submit">
        Add Contact
      </button>
    </form>
  );
};





// export class ContactForm extends Component {
// state = {
//   name: '',
//   number: '',
// };
// створюю фунцію очищення форми після сабміту
// resetForm = () => {
//   this.setState({
//     name: '',
//     number: '',
//   });
// };
// привязую інпути та введені значення
// onChangeInput = e => {
//   const { name, value } = e.currentTarget;
//   this.setState({ [name]: value });
// };

// handleSubmit = e => {
//   e.preventDefault();

//  кидаю пропсом ф-цію addContact (передаючи в неї стейт) на сабміт форми  ( handleSubmit) щоб додавати введений контакт
// this.props.addContact(this.state);
// this.resetForm();
// };
//   render() {
//     const { name, number } = this.state;
//     return (
//       <form className={css.formstyle} onSubmit={this.handleSubmit}>
//         <label className={css.label}>
//           Name
//           <br />
//           <input
//             className={css.input}
//             type="text"
//             name="name"
//             value={name}
//             onChange={this.onChangeInput}
//             pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces."
//             required
//           />
//         </label>
//         <br />
//         <label htmlFor="">
//           Number
//           <br />
//           <input
//             className={css.input}
//             type="tel"
//             name="number"
//             value={number}
//             onChange={this.onChangeInput}
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//         </label>
//         <br />
//         <button className={css.button} type="submit">
//           Add Contact
//         </button>
//       </form>
//     );
//   }
// }
// типізація

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired, // функція
};

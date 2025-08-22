import React, { useState } from 'react';
import styled from 'styled-components';
import FormInfo from '../ui/FormInfo';

interface FormValues {
  name: string;
  email: string;
  contactNumber: string;
  msg: string;
}

const ContactSection = styled.section`
  h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 3rem;
    margin: var(--margin);
    font-family: 'Roboto Condensed', Sans-Serif;
    font-weight: 700;
    line-height: 1.3;
    text-transform: capitalize;
    letter-spacing: 1px;
    color: var(--white);
  }
  .section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4rem;
    margin: var(--margin);
    padding: 3rem 0;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  input, textarea {
    padding: 1rem;
    border: 1px solid var(--heading);
    border-radius: 0.5rem;
    background: var(--dark);
    color: var(--white);
    font-size: 1rem;
  }
  input::placeholder, textarea::placeholder {
    color: var(--light);
  }
  textarea {
    min-height: 120px;
    resize: vertical;
  }
  .btn {
    background: var(--heading);
    color: var(--white);
    padding: 1rem 2rem;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s linear;
  }
  .btn:hover {
    background: var(--primary);
    transform: translateY(-2px);
  }
  @media screen and (max-width: 1000px) {
    .section {
      grid-template-columns: 1fr;
      grid-gap: 2rem;
    }
  }
`;

const Contact: React.FC = () => {
  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    contactNumber: '',
    msg: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  
  return (
    <ContactSection className='dark' id='contact'>
      <h3>Contact</h3>
      <div className='section'>
        <FormInfo />

        <form action='mailto:malhi.manjinder@outlook.com' method='POST' onSubmit={handleSubmit}>
          {/* for name */}
          <input
            type='text'
            name='name'
            placeholder='Name'
            value={values.name}
            onChange={handleChange}
          />

          {/* for email */}
          <input
            type='email'
            name='email'
            placeholder='E-mail'
            value={values.email}
            onChange={handleChange}
          />

          {/* for contact */}
          <input
            type='number'
            name='contactNumber'
            placeholder='(###) ###-#### contact number'
            value={values.contactNumber}
            onChange={handleChange}
          />

          {/* for textarea */}
          <textarea
            name='msg'
            placeholder='Your message here'
            value={values.msg}
            onChange={handleChange}
          ></textarea>

          <button className='btn' type='submit'>
            SEND MESSAGE
          </button>
        </form>
      </div>
    </ContactSection>
  );
};

export default Contact;

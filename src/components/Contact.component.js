import React , {useState} from 'react';
import  FormInfo  from './Form/FormInfo';
import Wrapper from "../assets/wrappers/Contact"

const Contact = () => {

 const [values, setValues] = useState(
  {
   name:'',
   email:'',
   contactNumber:'',
   msg:'',
  }
  );

  const handleSubmit = (e) => {
   e.preventDefault();
   console.log(e);
  }

  const handleChange = (e) => {
    setValues({[e.target.name]: e.target.value})
  }
  
  return (
    <Wrapper className='dark' id='contact'>
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
    </Wrapper>
  )
}

export default Contact;
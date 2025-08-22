import React from 'react';
import styled from 'styled-components';

const FormInfo: React.FC = () => {
  return (
    <article>
      <h2>Don't hesitate to contact us for<br /> questions & collaborations.</h2>
      <p>
        We're here to help with your business goals. The more details you<br />
        provide on your needs, the more prepared we'll be when we get in touch.
      </p>

      <div className='contact-section'>
        <div>
          <img src='/email.svg' alt="contact-img" />
        </div>
      
        <div className='contact-info'>
          <p>
            613-555-0188
            <br />
            <a href='mailto:hasokav497@praxisinnovations.dev'>hasokav497@praxisinnovations.dev</a>
          </p>
          <p>
            613-555-0188
            <br />
            <a href='mailto:hasokav497@praxisinnovations.dev'>hasokav497@praxisinnovations.dev</a>
          </p>
          <p>
            613-555-0188
            <br />
            <a href='mailto:hasokav497@praxisinnovations.dev'>hasokav497@praxisinnovations.dev</a>
          </p>
        </div>
      </div>
    </article>
  );
};

export default FormInfo;

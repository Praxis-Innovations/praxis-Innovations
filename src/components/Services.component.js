import { services } from '../assets/data'
import Wrapper from '../assets/wrappers/Services'

const Services = () => {
  return (
    <Wrapper className='light' id='service'>
        <h3>Services</h3>
      <div className='container'>
        {services.map((service, index) => {
          const { icon, title, about } = service
          return (
            <div key={index}>
              <article>
                <span>{icon}</span>
                <h5>{title}</h5>
                <p>{about}</p>
              </article>
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}

export default Services;

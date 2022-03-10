import {stacks} from '../assets/data'
import Wrapper from '../assets/wrappers/Technology';

const Technology = () => {
  return (
    <Wrapper className='dark' id='tech'>
      <h3>Technology</h3>
      <div className='container'>
        {stacks.map((stack, index) => {
          const { icon, title, about } = stack;
          return (
            <div key={index}>
              <article>
                <div className='inline'>
                  <span>{icon}</span>
                  <h4>{title}</h4>
                </div>
                <p>{about}</p>
              </article>
            </div>
          )
        })}
      </div>
    </Wrapper>
  )
}

export default Technology;
import img from '../assets/code-speed/404.svg'
import Wrapper from '../assets/wrappers/Error'

const Error = () => {
  return (
    <Wrapper>
      <div>

        <img src={img} alt='error' />
        <h3>ohh! page not found</h3>
        <p>We can't seem to find the page you're looking for</p>
      </div>
    </Wrapper>
  )
}

export default Error;

import { Link } from 'react-router-dom';
import { UserConsumer } from '../../providers/UserProvider';

const Navbar = ({ username }) => {
  return (
    <>
      <nav>
        <ul>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/profile'>
            <li>{username}</li>
          </Link>
        </ul>
      </nav>
    </>
  )
}

const ConnectedNavbar = (props) => (
  <UserConsumer>
    { value => <Navbar {...props} {...value} /> }
  </UserConsumer>
)

export default ConnectedNavbar;
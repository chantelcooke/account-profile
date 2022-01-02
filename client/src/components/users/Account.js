import { UserConsumer } from '../../providers/UserProvider';
import Moment from 'react-moment';

const Account = ({ username, created_at, memberlvl, img }) => {
  return (
    <>
      <h1>{username}</h1>
      <img src={img} alt='profile image' />
      <p>
        Date Joined: 
        <Moment format='MM/DD/YYYY'>
          {created_at}
        </Moment>
      </p>
      <p>
        Membership Level: {memberlvl}
      </p>
    </>
  )
}

const ConnectedAccount = (props) => (
  <UserConsumer>
    { value => <Account {...props} {...value} />}
  </UserConsumer>
)

export default ConnectedAccount;
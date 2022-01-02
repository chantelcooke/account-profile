import { UserConsumer } from '../../providers/UserProvider';
import Moment from 'react-moment';
import { Image, Card, Button } from 'react-bootstrap';
import NorthPole from '../../images/alexander-hafemann-M-EwSRl8BK8-unsplash.jpg';

const Account = ({ username, created_at, memberlvl, img }) => {
  return (
    <>
      {/* <h1>{username}</h1> */}
      <Image src={img} alt='profile image' thumbnail width="200px" />
      <Image src={NorthPole} alt='profile image' thumbnail width="200px" />
      {/* <p>
        Date Joined: 
        <Moment format='MM/DD/YYYY'>
          {created_at}
        </Moment>
      </p>
      <p>
        Membership Level: {memberlvl}
      </p> */}
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{username}</Card.Title>
          <Card.Text>
            Date Joined: 
            <Moment format='MM/DD/YYYY'>
              {created_at}
            </Moment>
            <br />
            Membership Level: {memberlvl}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

const ConnectedAccount = (props) => (
  <UserConsumer>
    { value => <Account {...props} {...value} />}
  </UserConsumer>
)

export default ConnectedAccount;
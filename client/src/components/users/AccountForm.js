import { useState, useEffect } from 'react';
import { UserConsumer } from '../../providers/UserProvider';
import { Form , Button } from 'react-bootstrap';
import { GoldBtn } from '../../styles/profileStyles';

const AccountForm = ({ id, username, memberlvl, updateUser, img }) => {
  const [user, setUser] = useState({ username: '', memberlvl: '', img: '' })

  useEffect( () => {
    if (id) {
      setUser({ username, memberlvl, img })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateUser(id, user)
    }
    setUser({ username: '', memberlvl: '', img: '' })
  }

  return (
    <>
      {/* <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input 
          name="username"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          required
        />
        <label>Profile Image:</label>
        <input 
          name="img"
          value={user.img}
          onChange={(e) => setUser({ ...user, img: e.target.value })}
          required
        />
        <label>Membership Level:</label>
        <select
          name="memberlvl"
          onChange={(e) => setUser({ ...user, memberlvl: e.target.value}) }
        >
          {
            memberOpts.map( m => 
              <option
                value={m.value}
              >
                {m.text}
              </option>
            )
          }
        </select>
        <button type='submit'>Submit</button>
      </form> */}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username: </Form.Label>
          <Form.Control 
            type='text'
            name="username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicImg">
          <Form.Label>Profile Image</Form.Label>
          <Form.Control 
            type='text'
            name="img"
            value={user.img}
            onChange={(e) => setUser({ ...user, img: e.target.value })}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLvl">
          <Form.Select 
            name="memberlvl"
            onChange={(e) => setUser({ ...user, memberlvl: e.target.value}) }
          >
            {
              memberOpts.map( m => 
                <option
                  value={m.value}
                >
                  {m.text}
                </option>
              )
            }
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <GoldBtn type="submit">
          Submit
        </GoldBtn>
      </Form>
    </>
  )
}

const memberOpts = [
  { key: 'b', text: 'Bronze', value: 'Bronze' },
  { key: 's', text: 'Silver', value: 'Silver' },
  { key: 'g', text: 'Gold', value: 'Gold' },
  { key: 'p', text: 'Platinum', value: 'Platinum' },
]

const ConnectedAccountForm = (props) => (
  <UserConsumer>
    { value => <AccountForm {...props} {...value} />}
    {/* { value => <AccountForm {...props} username={value.username} updateUser={value.updateUser} />} */}
  </UserConsumer>
)

export default ConnectedAccountForm;
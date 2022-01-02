import { Button } from 'react-bootstrap';
import { Header } from '../../styles/profileStyles';

const Home = ({}) => {
  return (
    <>
      <h1 style={{ background: '#537FA6', color: 'white', fontSize: '40px' }}>Home Page</h1>
      <h1 style={styles.headerOne}>Home Page</h1>
      <h1 style={styles.headerTwo}>Home Page</h1>
      <h1 className="">Home Page</h1>
      <Header>My Page</Header>
      <Header lrg>My Page</Header>
      <Button>Click me</Button>
      <Button variant="outline-info">Click me</Button>
    </>
  )
}

const styles = {
  headerOne: {
    background: '#BF9C34',
    color: 'white',
    fontSize: '12px',
  },
  headerTwo: {
    background: '#F2D680',
    color: 'white',
    fontSize: '2px',
  }
}

export default Home;
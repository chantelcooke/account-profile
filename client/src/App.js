import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
import Profile from './components/users/Profile';
import NoMatch from './components/shared/NoMatch';
import Navbar from './components/shared/Navbar';

const App = () => (
  <>
    <Navbar />
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/profile' element={<Profile />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </>
  </>
)

export default App;

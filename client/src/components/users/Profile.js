
import Account from './Account';
import AccountForm from './AccountForm';
import { MainContainer, MyBtn } from '../../styles/profileStyles';

const Profile = ({}) => {
  return (
    <MainContainer>
      <MyBtn>Click</MyBtn>
      <Account />
      <AccountForm />
    </MainContainer>
  )
}

export default Profile;
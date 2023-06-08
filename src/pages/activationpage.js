
import { useParams } from 'react-router-dom';
import activateAccount from './activate';
import Login from '../login';

function ActivationPage() {

  const { uid, token } = useParams();
  activateAccount(uid, token);

  return(<Login />);

  

}



export default ActivationPage;
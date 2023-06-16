import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import AuthNavigation from './AuthNavigation';
import authStatus from '../utils/authStatus';
import { Loading } from '../components/modals';

function RootNavegation() {
  const { status } = useSelector((store) => store.user);
  return (
    <NavigationContainer>
      <AuthNavigation />
      {status === authStatus.checking ? <Loading /> : null}
    </NavigationContainer>
  );
}

export default RootNavegation;

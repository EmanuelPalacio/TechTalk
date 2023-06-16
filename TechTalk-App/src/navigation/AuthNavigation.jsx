import { useSelector } from 'react-redux';
import TabNavigation from './TabNavigation';
import HomeNavigation from './HomeNavigation';
import authStatus from '../models/authStatus';

export default function AuthNavigation() {
  const { status } = useSelector((store) => store.user);

  return status === authStatus.authorized ? (
    <TabNavigation />
  ) : (
    <HomeNavigation />
  );
}

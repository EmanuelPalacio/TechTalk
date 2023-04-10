import { Provider } from 'react-redux';
import { store } from './src/store/store.js';
import RootNavigation from './src/navigation/RootNavigation.js';

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}

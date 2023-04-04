import { Provider } from 'react-redux';
import { store } from './src/store/store.js';
import RootNavegation from './src/navigation/RootNavegation.js';

export default function App() {
  return (
    <Provider store={store}>
      <RootNavegation />
    </Provider>
  );
}

import { Provider } from "react-redux";
import { store } from "./src/store/store.js";
import HomeNavegation from "./src/navigation/HomeNavegation.js";

export default function App() {
  return (
    <Provider store={store}>
      <HomeNavegation />
    </Provider>
  );
}

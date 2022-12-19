import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./components/Routes/Routes";
import store from "./redux/store";

function App() {
  return (
    <div className="container mx-auto">
        <Provider store={store}>
        <RouterProvider router={router} />
        </Provider>
    </div>
  );
}

export default App;

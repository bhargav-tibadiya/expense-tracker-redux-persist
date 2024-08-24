import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Record from "./pages/Record";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Toaster />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/record" element={<Record />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;

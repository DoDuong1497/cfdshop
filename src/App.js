import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./assets/css/style.scss";
import Login from "./components/login";
import MainLayout from "./layout/mainlayout";
import Checkout from "./pages/checkout";
import Home from "./pages/home";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes >
        <Route path='/' element={<MainLayout/>}>          
            <Route index element={<Home/>}></Route>
            <Route path='blog' element={<Home/>}></Route>
            <Route path='aboutus' element={<Home/>}></Route>
            <Route path='caterogy' element={<Home/>}></Route>
            <Route path='checkout' element={<Checkout/>}></Route>
        </Route>
            <Route path='/login' element={<Login/>}></Route>
      </Routes>
     
      </BrowserRouter>
    </div>
  );
}

export default App;

import Footer from "./components/footer";
import Header from "./components/header";
import Nav from "./components/nav";
import "./assets/css/style.scss"
import Button from "./components/button";
import { ArrowDown } from "./components/icon";
import BasicCategory from "./components/basiccategory";


function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <BasicCategory header='header'></BasicCategory>
      <Footer />
    </div>
  );
}

export default App;

import "./assets/css/style.scss";
import Category from "./components/category";
import Footer from "./components/footer";
import Header from "./components/header";
import Nav from "./components/nav";


function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Category header='header'></Category>
      <Footer />
    </div>
  );
}

export default App;

import "./assets/css/style.scss";
import MainLayout from "./layout/mainlayout";
import Home from "./pages/home";


function App() {
  return (
    <div className="App">
      <MainLayout>
        <Home/>
      </MainLayout>
    </div>
  );
}

export default App;

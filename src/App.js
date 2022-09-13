import Bag from "./components/Bag";
import Nav from "./components/Nav";
import DataProvider from "./context/Data";




function App() {
  return (
    <div className="App">
      <DataProvider>
        <Nav/>
        <Bag />
      </DataProvider>
    </div>

  );
}

export default App;

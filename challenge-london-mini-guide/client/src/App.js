import './App.css';

import Table from './Table';
import SelectCity from './SelectCity';

function App() {
  return (
    <div className="App">
      <h1>City Mini Guide</h1>

      <main>
        <SelectCity />

        <div className="categoryButtons">
          <button>Pharmacies</button>
          <button>Schools {"&"} Colleges</button>
          <button>Hospitals</button>
          <button>Doctors</button>
        </div>

        <br />

        <Table />
      </main>
    </div>
  );
}

export default App;

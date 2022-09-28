import logo from "./logo.svg";
import "./App.css";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

function App() {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src / App.js </code> and HELLO ALTA GROUP{" "}
        </p>{" "}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          BOOM BOOM BOOM{" "}
        </a>{" "}
      </header>{" "}
    </div>
  );
}

async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

export default App;

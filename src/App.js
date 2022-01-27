import './App.css';
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import RowPost from './Components/RowPost/RowPost';
import {action, originals,trendings,Horrormovies,Romancemovies,comedymovies } from './Components/urls/urls'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <RowPost url={originals} title="Netflix Originals" />
      <RowPost url={trendings} title="Trenidngs" isSmall={true} />
      <RowPost url={Horrormovies} title="Horror Movies" isSmall={true} />
      <RowPost url={Romancemovies} title="Romance Movies" isSmall={true} />
      <RowPost url={comedymovies} title="Comedy Movies" isSmall={true} />

      <RowPost url={action} title="Action" isSmall />
    </div>
  );
}

export default App;

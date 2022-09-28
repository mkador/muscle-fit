import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ActivitiesItems from './Components/Activities-Items/ActivitiesItems';
import Activities from './Components/Activities/Activities';

function App() {
  return (
    <div>
     <Header></Header>
     <Activities></Activities>
    </div>
  );
}

export default App;

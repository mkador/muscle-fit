
import './App.css';
import Header from './Components/Header/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ActivitiesItems from './Components/Activities-Items/ActivitiesItems';
import Activities from './Components/Activities/Activities';
import QandAns from './Components/QuestionAndAnswers/QandAns';

function App() {
  return (
    <div className='container'>
     <Header></Header>
     <Activities></Activities>
     <QandAns></QandAns>
    </div>
  );
}

export default App;

import './App.css';
import Header from './Components/Header/Header';
import QuestionOne from './Components/Question-one/QuestionOne';
import QuestionTwo from './Components/Question-two/QuestionTwo';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <Shop></Shop>
      <QuestionOne></QuestionOne>
      <QuestionTwo></QuestionTwo>
    </div>
  );
}

export default App;


import './App.css';
import Squares from "./lifting-state/Squares";
import SignUp from './lifting-state/SignUp';
import Max from "./lifting-state/Max";

const App = () => (
    
    <div className="container">
      <Squares/>
      <SignUp minimumLength={ 12 }/>
      <Max count={[ 5, 10 ]}/>
    </div>
)

export default App;

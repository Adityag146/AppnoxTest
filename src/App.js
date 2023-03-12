import logo from './logo.svg';
import './App.css';
import './style.css';
import { store } from './store'
import { Provider } from 'react-redux'

import ApiData from './Components/Home';
import Loader from './Components/Loader/Loader';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
     
    { <ApiData/>}
      </div>
      </Provider>  
  );
}

export default App;

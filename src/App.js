import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Header from './Components/Header' 
import Home from './Components/Home';
import Detail from './Components/Detail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" caseSensitive={false} element={<Home />} />
          <Route path="/detail/:id" caseSensitive={false} element={<Detail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

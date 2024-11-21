import {Routes, Route, Link} from 'react-router-dom';

import AllDebuts from "./AllDebuts";
import Home from './Home';

function App() {
  return (
    <>
      <h1>This is an MCU app, see what year each hero debuted.</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/debuts">See All Debuts</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/debuts' element={<AllDebuts />} />
      </Routes>
    </>
  );
}

export default App;

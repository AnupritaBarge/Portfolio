import './App.css';
import Homepage from './Components/Homepage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Resume from './Components/Resume';
import ToggleButton from './Components/Projects/ToggleButton';
import Shimmer from './Components/Projects/Shimmer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = '/home' element={<Homepage/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path = '/toggle' element = {<ToggleButton/>}/>
        <Route path = '/shimmer' element = {<Shimmer/>}/>

        {/* default route */}
        <Route path='*' element = {<Homepage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
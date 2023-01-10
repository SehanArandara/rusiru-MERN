import './App.css';
import NavBar from './Components/NavBar';
import AddStudent from './Components/AddStudent';
import AllStudents from './Components/AllStudents';
import EditStudent from './Components/EditStudent';
import {BrowserRouter,Route,Routes} from "react-router-dom";     // import this file to do router

/*https://stackoverflow.com/questions/71303779/react-route-is-not-working-react-router*/
// do routing as below because this is new version
function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/add" element={<AddStudent />} />
        </Routes>
        <Routes>
          <Route path="/edit/:id" element={<EditStudent />} />    // edit path is not correct
        </Routes>
        <Routes>
          <Route path="/" element={<AllStudents />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

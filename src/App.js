import 'bootstrap/dist/css/bootstrap.min.css';
import Education from './components/Education';
import Header from './components/Header';
import Intro from './components/Intro';
import Profile from './components/Profile';
import Project from './components/Project';
import Work from './components/Work';
import GetInTouch from './components/GetInTouch';
const App = () => {
  return (
    <div>   
      <Header />
      <div className="container">
        <Profile />
        <Intro/>
        <hr className="text-dark"></hr>
        <Education />
        <hr className="text-dark"></hr>
        <Work />
        <hr className="text-dark"></hr>
        <Project />
        <hr className="text-dark"></hr> 
      </div>
      <GetInTouch />
    </div>
  );
}

export default App;
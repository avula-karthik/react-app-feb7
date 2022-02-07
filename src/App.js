import logo from './logo.svg';
import './App.css';
import Menu from './Menu';
import Registration from './Registration';
import Hobbies from './Hobbies';
import Native from './Native';
import Login from './Login';
import Counter from './Counter';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
    <Menu></Menu>
    <Registration></Registration>
    <Login></Login>
    <Native></Native> 
    <Hobbies></Hobbies>
    
    <Counter></Counter>
    <Footer></Footer>
    </div>
  );
}
export default App;

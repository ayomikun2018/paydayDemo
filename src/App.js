import './App.css';
import {Route, Routes} from 'react-router';

import LandingPage from './Components/Pages/LandingPage/LandingPage';
import SignIn from './Components/Pages/SignIn/SignIn';
import SignUp from './Components/Pages/SignUp/SignUp';
function App() {
  return (
   <Routes>
      <Route exact path= '/' element = {<LandingPage/>}/>
      <Route exact path= '/signIn' element = {<SignIn/>}/>
      <Route exact path= '/signUp' element = {<SignUp/>}/>

   
   

   </Routes>
  
  );
}

export default App;

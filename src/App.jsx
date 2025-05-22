import {Route, Routes} from "react-router-dom"
import AnimatedWelcome from './Page/AnimatedWelcome'
import Index from "./Page/Index";
import Register from "./Page/Register";
import Login from "./Page/Login";
import Lesson1 from "./Page/Lesson1";
import Question from "./Page/Question";
import CircuitDragDrop from "./Page/CircuitDragDrop";
import UnderConstruction from "./Page/UnderConstruction";



function App() {
 
  return (
    <Routes>
      <Route path='/' element={<AnimatedWelcome/>}/>
      <Route path='/home' element={<Index/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Lesson1' element={<Lesson1/>}/>
      <Route path='/Question' element={<Question/>}/>
      <Route path='/Drag-Drop' element={<CircuitDragDrop/>}/>
      <Route path='/fin' element={<UnderConstruction/>}/>

      
    </Routes>
  )
}

export default App



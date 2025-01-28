import './App.css'
import Input from './components/Inputs'

import LoginForm from './components/LoginForm'
import Inputs from './stories/components/Inputs/Inputs'

function App() {

  return (
    <> 
     {/* <LoginForm /> */}
     {/* <Inputs /> */}
      <Inputs label='YourName' placeholder='please fill  name  ' backgroundColor='yellow'/>    
      <Inputs label='Address' placeholder='please fill  home address ' backgroundColor='red'/>     
    
    </>
   
  )
}

export default App

import Dash from "./Pages/Dashbord/Dash"
import Forgot from "./Pages/Forgot password/Forgot"
import Land from "./Pages/Landing page/Land"
import New from "./Pages/New password/New"
import Inn from "./Pages/Sign-in/Sign-in"
import Upp from "./Pages/Sign-up/up"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" element={<Land/>}/>
        <Route exact path="/Dash" element={<Dash/>}/>
        <Route exact path="/Forgot" element={<Forgot/>}/>
        <Route exact path="/New" element={<New/>}/>
        <Route exact path="/Inn" element={<Inn/>}/>
        <Route exact path="/Upp" element={<Upp/>}/>
     </Routes>
     </Router>
</>
  
  )
}

export default App;

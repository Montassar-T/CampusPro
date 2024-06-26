import Login from "./components/Login"
import { Routes ,Route} from "react-router-dom"
import Home from "./components/Home"
function App() {

  return (
    <div className="min-h-screen min-w-full flex ">
      
      
      <Routes>
                
                <Route path='/home' element={<Home />} />
               

      </Routes>

    </div>
  )
}

export default App

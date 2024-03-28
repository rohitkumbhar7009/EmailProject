import React from 'react';
import { Routes, Route } from "react-router-dom";
import TextEditor from './TextEditor';





const App = () => {
  return (
    <div >


           

       <Routes>
    
              <Route path="/"     element={<TextEditor/>}  />
              {/* <Route path="/adminsignup" element={<SignUp/>} />
              <Route path="/forgotPass" element={<ForgotPass/>} /> */}
        
        
            </Routes>
      
    </div>
  )
}

export default App

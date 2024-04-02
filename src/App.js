import React from 'react';
import { Routes, Route } from "react-router-dom";
import TextEditor from './TextEditor';
import EmailTemplate from './EmailTemplate';
import Shortcodes from './Shortcodes';





const App = () => {
  return (
    <div >


           

       <Routes>
    
              <Route path="/"     element={<TextEditor/>}  />
               <Route path="/listemail" element={<EmailTemplate/>} /> 
              <Route path="/upemailtemplate/:_id" element={<Shortcodes/>} /> 
        
        
            </Routes>
      
    </div>
  )
}

export default App

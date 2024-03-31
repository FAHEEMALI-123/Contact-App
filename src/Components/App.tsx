import React, { useState } from 'react';
import  Tabler from './tabler';



function App() {

  const[employeedet,setEmployeedet] =  useState([]);

    return(
        <div>
<div className="navbar bg-primary text-primary-content">
  <button className="btn btn-ghost text-xl">ContactAPP</button>
</div>
<Tabler/>
</div>

      
  

  );
}

export default App;

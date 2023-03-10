import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'


function After() {
    return (
    <div>
      
        <Navbar />
         <div className='container-fluid' id='main'>
            <div className='row row-offcanvas row-offcanvas-left'>
            <Sidebar/>
            <Dashboard />
          </div>
         

      </div>

    </div>
  )
}

export default After
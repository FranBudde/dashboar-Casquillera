import React from 'react'

function TopBar() {
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow" id='navbar'>
            {/* <h1 id='title_Navbar' className='neon-title'>Casquilleras</h1> */}

            <h1 id='title_Navbar' className='neon-title'>Casquilleras</h1>

            
        </nav>
    )
}

export default React.memo(TopBar)

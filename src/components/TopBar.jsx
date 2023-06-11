import React from 'react'

function TopBar() {
    return (
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
            <h1 id='title_Navbar'>Casquilleras</h1>
        </nav>
    )
}

export default React.memo(TopBar)

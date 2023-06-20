import React from 'react'

import { Link } from 'react-router-dom'

function SideBar() {
	return (
		<ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

			{/* <!-- Sidebar - Brand --> */}
			<Link className="sidebar-brand d-flex align-items-center justify-content-center" style={{'marginTop':'15px'}} to="/">
				<div className="sidebar-brand-icon">
					<img className="w-100" src="/assets/images/logo.PNG" alt="Casquillera"/>
				</div>
			</Link>

			{/* <!-- Divider --> */}
			<hr className="sidebar-divider my-0" />

			{/* <!-- Nav Item - Dashboard --> */}
			<li className="nav-item active">
				<Link className="nav-link" to="/">
					<i className="fas fa-fw fa-tachometer-alt " style={{'color': 'black'}}></i>
					<span className='siderBar-text'>Dashboard - Casquillera</span>
				</Link>
			</li>

			{/* <!-- Divider --> */}
			<hr className="sidebar-divider" />

			{/* <!-- Heading --> */}
			<div className="sidebar-heading" style={{'color': 'black'}}>Actions</div>
			<hr />

			{/* <!-- Nav Item - Pages --> */}
			<li className="nav-item" >
				<Link className="nav-link collapsed" to="/genres">
					<i className="fas fa-fw fa-folder" style={{'color': 'black'}}></i>
					<span className='siderBar-text'>Usuarios</span>
				</Link>
			</li>

			{/* <!-- Nav Item - Charts --> */}
			<li className="nav-item">
				<Link className="nav-link" to="/products">
					<i className="fas fa-fw fa-chart-area " style={{'color': 'black'}}></i>
					<span className='siderBar-text'>Productos</span>
				</Link>
			</li>

			{/* <!-- Nav Item - Tables --> */}
			<li className="nav-item">
				<Link className="nav-link" to="/last-movie">
					<i className="fas fa-fw fa-table " style={{'color': 'black'}}></i>
					<span className='siderBar-text'>Ultimo Producto</span>
				</Link>
			</li>

			<li className="nav-item">
				<Link className="nav-link" to="/search/products">
					<i className="fas fa-search " style={{'color': 'black'}}></i>
					<span className='siderBar-text'>Buscar Producto</span>
				</Link>
			</li>

			<li className="nav-item">
				<Link className="nav-link" to="/search/users">
					<i className="fas fa-search " style={{'color': 'black'}}></i>
					<span className='siderBar-text'>Buscar Usuario</span>
				</Link>
			</li>

			{/* <!-- Divider --> */}
			<hr className="sidebar-divider d-none d-md-block" />
		</ul>
	)
}

export default React.memo(SideBar)

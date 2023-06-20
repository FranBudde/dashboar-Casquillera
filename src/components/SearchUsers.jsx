import React from 'react'
import { Link } from 'react-router-dom'

function SearchProducts(props) {
    const [users, setMovies] = React.useState([])
    const [keyword, setKeyWord] = React.useState('')

    // Credenciales de API

    const getProducts = () => {
        fetch(`http://localhost:3000/api/users/search?keyword=${keyword}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMovies(data || [])
            })
            .catch(err => {
                console.log('Error: ', err);
            })
    }

    React.useEffect(() => {
        getProducts()
    }, [])

    const onSearch = (e) => {
        e.preventDefault()
        getProducts()
    }

    return (
        <div className="container-fluid">
            <div className="row my-4">
                <div className="col-12 col-md-6">
                    {/* Buscador */}
                    <form onSubmit={onSearch}>
                        <div className="form-group">
                            <label htmlFor="">Buscar por nombre:</label>
                            <input type="text" className="form-control" onChange={(e) => setKeyWord(e.target.value)} />
                        </div>
                        <button className="btn btn-info">Search</button>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h2>Usuarios: {keyword}</h2>
                </div>
                {
                    users.length > 0 && users.map((users, i) => {
                        return (
                            <div className="col-sm-6 col-md-3 my-4" key={i} >
                                <div className="card shadow mb-4" >
                                    <div className="card-header py-3">
                                        <h5 className="m-0 font-weight-bold text-gray-800">{users.name}</h5>
                                    </div>
                                    <div className="card-body" >
                                        <div className="text-center" style={{'height': '300px'}}>
                                            <img
                                                className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                                                src={`http://localhost:3000/img/imageUsers/${users.avatar}`}
                                                style={{ width: '100%', 'height': 'auto', 'maxHeight': '200px', }}
                                            />
                                        </div>
                                        <p>Apellido: {users.last_name}</p>
                                        <p>Email: {users.email}</p>
                                        <Link className="btn btn-danger" rel="nofollow" to={`/usuario/${users.id}`}>Detail</Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {users.length === 0 && <div className="alert alert-warning text-center">No se encontraron productos</div>}
        </div>
    )
}

export default SearchProducts
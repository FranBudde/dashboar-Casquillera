import React from 'react'

import MovieList from './MovieList'
import ProductService from '../services/products'

class Movie extends React.Component {
    state = {
        products: []
    }

    async componentDidMount() {
        const productsResponce = await ProductService.get();
        const {data} = productsResponce
        try {
            if(data){
                this.setState({ products: data })
            }

        } catch (error) {
            console.log(error)
            
        }
    }

    render() {
        return (
            <div style={{'padding': '10px'}}>
                {/*<!-- MOVIES LIST -->*/}
                <h1 className="h3 mb-2 text-gray-800 ">All the movies in the Database</h1>

                {/*<!-- DataTales Example -->*/}
                <div className="card shadow mb-4">
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th>Nombre</th>
                                        <th>Descripcion</th>
                                        <th>Precio</th>
                                        <th>Descuento</th>
                                        <th>Precio Final</th>
                                        <th>Detalle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.products.map((product, index) => {
                                            return <MovieList  {...product} key={index} />
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Movie

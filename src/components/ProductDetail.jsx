import React from 'react'
import productService from '../services/products'
import { Link } from 'react-router-dom'

import { useParams } from 'react-router-dom'

function ContentProductDetail() {
    const [products, setProducts] = React.useState([])
    
    const {id} = useParams();


    React.useEffect(() => {
        async function getData() {
            const productsResponse = await productService.getById(id)
            const productDetail = productsResponse.data
            console.log(productDetail);

            setProducts(productDetail)

        }
        getData()
    }, [])


    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Last product in Data Base</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4 img-last-product"  src={`http://localhost:3000/img/products/${products.image}`} alt=" Star Wars - Mandalorian " />
                    </div>
                    <p>Nombre: {products.name}</p>
                    <p>Detalle del producto: {products.description}</p>
                    <p>Precio Original: ${products.price}</p>
                    <p>Descuento: %{products.discount}</p>
                    <p>Precio Final: ${ products.price - ((products.price * (products.discount / 100)))}</p>
                    <Link className="btn btn-danger"  rel="nofollow" to="/">Home</Link>

                </div>
            </div>
        </div>
    )
}

export default React.memo(ContentProductDetail)
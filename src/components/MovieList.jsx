import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function MovieList(props){
    return (
        <React.Fragment>
            <tr>
                <td>{props.name}</td>
                <td>{props.description}</td>
                <td>${props.price}</td>
                <td>% {props.discount}</td>
                <td>${ props.price - ((props.price * (props.discount / 100)))}</td>
                <td><Link to={`/product/${props.id}`} className='links'>Ver</Link></td>
            </tr>
        </React.Fragment>
    )
}

MovieList.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string, //cambiarlo a number despues de que se cambien los seeders
    discount: PropTypes.number
}

export default MovieList
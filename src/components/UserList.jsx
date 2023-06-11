import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function UserList(props){
    return (
        <React.Fragment>
            <tr>
                <td>{props.name}</td>
                <td>{props.last_name}</td>
                <td>{props.email}</td>
                <td><Link to={`/usuario/${props.id}`} className='links'>Ver</Link></td>
            </tr>
        </React.Fragment>
    )
}

UserList.propTypes = {
    name: PropTypes.string,
    last_name: PropTypes.string,
    email: PropTypes.string,
}

export default UserList

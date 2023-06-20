import React from 'react'

import userService from '../services/user'
import UserList from './UserList'

class UsersInDb extends React.Component {
    state = {
        user: [],
    }

    async componentDidMount() {
        const user = await userService.get()
        const { data } = user
        try {
            this.setState({ user: data })
        } catch (error) {
            console.log(error)
        }
    }


    render() {
        return (
            <div id='conteiner-users'>
                <h5>Usuarios existentes</h5>
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Apellido</th>
                            <th>Email</th>
                            <th>Usuario</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            this.state.user.map((user, i) => {
                                return <UserList  {...user} key={i} />
                            })
                        }

                    </tbody>
                </table>
            </div>
        )
    }
}

export default UsersInDb
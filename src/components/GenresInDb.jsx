import React from 'react'

import userService from '../services/user'
import UserList from './UserList'

class UsersInDb extends React.Component {
    state = {
        user: [],
    }

    async componentDidMount() {
        const user = await userService.get()
        console.log(user);
        const { data } = user
        console.log(data);
        try {
            this.setState({ user: data })
        } catch (error) {
            console.log(error)
        }
    }


    render() {
        return (
            <div >
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
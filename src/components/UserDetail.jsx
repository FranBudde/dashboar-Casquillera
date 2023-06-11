import React from "react";
import { useParams } from "react-router-dom";

import userService from "../services/user";

function UserDetail() {

    const { id } = useParams();
    const [user, setUser] = React.useState({});

    React.useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await userService.getById(id);
        console.log(data);
        const user = data.data;
        console.log(user.avatar);
        setUser(user);
    }

    // <img src={`http://localhost:3000/img/imageUsers/${user.avatar}`} alt="" />

    return (
        <div>
            <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Pais</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{'width': '5px'}} ><img src={`http://localhost:3000/img/imageUsers/${user.avatar}`} alt="" style={{'width': '100%'}}/></td>
                        <td>{user.name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.email}</td>
                        <td>{user.addres}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default UserDetail

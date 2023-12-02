import { useState } from "react";
import { USERS } from "./users-mock";
import './UserList.css';
import CreateUser from "./CreateUser";
import { Button } from "@nextui-org/react";

function UserList() {

    const [users, setUsers] = useState(USERS);

    const add = () => {
        const newUser = { id: users.length + 1, name: "Sofia" };

        //users.push(newUser);
        setUsers([...users, newUser]);
    }
    const clear = () => setUsers([]);

    return (
        <div className="UserList">

            <CreateUser />

            <h2>User List</h2>
            <ul>
                {users.map((i, index) =>
                    <li key={i.id}>[{i.id}] - {i.name}</li>
                )}
            </ul>
            <Button onClick={add}>Add New User</Button>
            <Button onClick={clear}>Clear All Users</Button>
            {/* <button onClick={add}>Add New User</button> */}
            {/* <button onClick={clear}>Clear All Users</button> */}
        </div>
    );
}

export default UserList;
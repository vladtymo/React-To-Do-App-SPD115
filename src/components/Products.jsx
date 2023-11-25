import React, { useEffect, useState } from 'react'
import './Products.css';

const api = 'https://shopwebapispu111.azurewebsites.net/api/products/all';

export default function Products() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        console.log("Component was mounted!");

        async function fetchData() {
            const res = await fetch(api);
            const users = await res.json();

            setUsers(users);
        }
        fetchData();

    }, []);

    useEffect(() => {
        console.log("Some of the state data was changed!");
    });

    useEffect(() => {
        console.log("Users was changed!");
    }, [users]);

    useEffect(() => {
        return () => {
            console.log("Component was unmounted!");
        }
    }, []);

    return (
        <div className='Products'>
            <h2>Product Catalog</h2>
            <ul>
                {users.map(i => <li key={i.id}>{i.name} {i.price}$</li>)}
            </ul>
        </div>
    )
}

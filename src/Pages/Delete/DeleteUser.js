import React, { useEffect, useState } from 'react';

const DeleteUser = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/userService')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const handleDelete = id => {
        fetch(`http://localhost:4000/userService/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert("delete successfully")
                    const remaining = services.filter(service => service._id !== id)
                    setServices(remaining)
                }
            })
    }
    return (
        <div>
            <h2>User Delete & Update</h2>
            {
                services.map(service => <li key={service._id}>{service.Name} <button onClick={() => handleDelete(service._id)}>Delete</button> </li>)
            }
        </div>
    );
};

export default DeleteUser;
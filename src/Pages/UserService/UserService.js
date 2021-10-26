import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './userService.css'

const UserService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:4000/userService', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("added successfully")
                    reset()
                }
            })
    }
    return (
        <div className="user-info">
            <h1>Please add your services</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Name" {...register("Name")} />
                <textarea placeholder="description" {...register("description")} />
                <input placeholder="price" type="Number" {...register("price")} />
                <input placeholder="img-url" {...register("img")} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UserService;
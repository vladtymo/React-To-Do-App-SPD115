import { Button } from '@nextui-org/react';
import React from 'react'
import { useForm } from 'react-hook-form'

export default function CreateUser() {


    const {
        register,       // register each form input
        handleSubmit,   // onSubmit event handler
    } = useForm();

    const create = (user) => {

        console.log(user);
        alert("User was sucessfully created!");
    }

    return (
        <>
            <h2>Create User Form</h2>
            <form onSubmit={handleSubmit(create)}>
                <label>
                    <span>Email:</span>
                    <input {...register("email")} type="email" />
                </label>
                <label>
                    <span>Birhtdate:</span>
                    <input {...register("birthdate")} type="date" />
                </label>
                <label>
                    <span>Admin?</span>
                    <input {...register("isAdmin")} type="checkbox" />
                </label>
                <div>
                    <Button type='submit' color='success'>Create</Button>
                </div>
            </form>
        </>
    )
}

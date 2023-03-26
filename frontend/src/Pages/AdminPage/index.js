import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar/Nav';
import Footer from '../../components/Footer/footer';
import axios from 'axios';
import User from '../../components/User/UserList/index';
import '../../components/User/UserList/index.css'
import Button from '../../components/Button/button';

const AdminPage = () => {

    const [users, setUsers] = useState([]);

    // const token = window.localStorage.getItem('token');
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3YwLjAuMS9hdXRoL2xvZ2luIiwiaWF0IjoxNjc5ODUxMDA2LCJleHAiOjE2Nzk4NTQ2MDYsIm5iZiI6MTY3OTg1MTAwNiwianRpIjoiRW43VHBzNGp0dk5SckxMQSIsInN1YiI6IjQiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.HMMYk31ZobH8_ErIgn5AeoyojfEkH2d3-Y44SKYae8Y"

    useEffect(() => {
        const getUsers = () => {
            axios.get('http://127.0.0.1:8000/api/v0.0.1/get_all_users', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {
                setUsers(response.data.users)
                console.log(response.data.users)
            })
        }
        getUsers()
    }, [])




    return (
        <>
            <div>
                <NavBar></NavBar>
                
                <div className='admin-content'>
                <h2 className='list'>Users List</h2>
                    <div className="table-container">
                        {users.map((user,index) => (
                            <React.Fragment key={index}>
                            <User key={user.id} user={user} />
                            </React.Fragment>
                        ))}

                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminPage




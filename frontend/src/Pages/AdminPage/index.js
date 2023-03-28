import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar/Nav';
import Footer from '../../components/Footer/footer';
import axios from 'axios';
import User from '../../components/User/UserList/index';
import '../../components/User/UserList/index.css'
import Button from '../../components/Button/button';

const AdminPage = () => {

    const [users, setUsers] = useState([]);

    const token = localStorage.getItem('token');
  

    useEffect(() => {
        const getUsers = () => {
            axios.get('http://127.0.0.1:8000/api/v0.0.1/get_all_users', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {
                setUsers(response.data.users)
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




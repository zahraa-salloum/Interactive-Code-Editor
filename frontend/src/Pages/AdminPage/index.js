import React,{useState, useEffect} from 'react';
import NavBar from '../../components/NavBar/Nav';
import Footer from '../../components/Footer/footer';
import axios from 'axios'

const AdminPage = () => {

    const [users, setUsers] = useState([]);

    const token = window.localStorage.getItem('token');

    useEffect(() => {
        const getUsers = () => {
            axios.get('http://127.0.0.1:8000/api/v0.0.1/get_all_users', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
                }).then(response => {
                    setUsers(response.data)
                })
        }
        getUsers()
    }) 
    



    return(
        <div>
            <NavBar/>
            
        </div>
    )
}

export default AdminPage


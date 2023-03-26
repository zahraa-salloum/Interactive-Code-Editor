import React,{useState, useEffect} from 'react';
import NavBar from '../../components/NavBar/Nav';
import Footer from '../../components/Footer/footer';
import axios from 'axios';
import User from'../../components/User/index'

const AdminPage = () => {

    const [users, setUsers] = useState([]);

    // const token = window.localStorage.getItem('token');
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3YwLjAuMS9hdXRoL2xvZ2luIiwiaWF0IjoxNjc5ODM2OTQyLCJleHAiOjE2Nzk4NDA1NDIsIm5iZiI6MTY3OTgzNjk0MiwianRpIjoiU3duSWxVbmk1V1FaWnMySyIsInN1YiI6IjQiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.y3So6qBu1QyADReC4yhktJDBX-IprgNYl9hvQMd89ME"

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
    },[]) 
    



    return(
        <div>
            <NavBar></NavBar>   
            <h2>Users List</h2>
            {users.map(user => (
          <User key={user.id} user={user} />

         ))}
        </div>
    )
}

export default AdminPage


  
  
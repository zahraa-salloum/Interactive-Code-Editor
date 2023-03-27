import { useEffect, useState } from 'react';
import './search.css';
import UserCard from './user_card/user';
import axios from 'axios';
const Search = () => {
    const [user, setUser] = useState('');
    const [responses, setResponses] = useState([]);

    const token = localStorage.getItem('token')
    useEffect(() => {
        const fetchUsers = async() => {
            await axios({
                method: 'GET',
                url: 'http://127.0.0.1:8000/api/v0.0.1/get_all_users',
                headers: {
                    Authorization: 'Bearer ' + token
                }
            }).then((res) => {
                console.log(res.data.users);
                setResponses(res.data.users);
            }).catch((err) => {
                console.log(err);
            });
        }
        fetchUsers();
    },[]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    }
    return(
        <div>
            <div className="search-header">
                <div className='search-header-text'>
                    <h1>Search for a developer!</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="text" required value={ user } onChange = {(e) => setUser(e.target.value)} placeholder='User Name'/>
                    <button>Filter</button>
                </form>
            </div>
            <div className='fetch-users'>
                {responses.map((response) => {
                    return <UserCard key={response.id} firstName={response.first_name} lastName={response.last_name} bio={response.bio} image={response.picture}/>
                })};

            </div>

        </div>
    );
}
export default Search
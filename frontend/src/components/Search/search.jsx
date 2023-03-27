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
        const fetch_filtered = async() => {
            await axios({
                method: 'GET',
                url: 'http://127.0.0.1:8000/api/v0.0.1/filter_user',
                params: {
                    name: user
                },
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => {
                console.log(res.data.users);
                setResponses(res.data.users);
            }).catch((err) => {
                console.log(err);
            });
        }
        fetch_filtered();
    }
    return(
        <div>
            <div className="search-header" id='users'>
                <div className='search-header-text'>
                    <h1 className="search-title">Search for a developer!</h1>
                </div>
                <form className = "filter_section" onSubmit={handleSubmit}>
                    <input type="text" required value={ user } onChange = {(e) => setUser(e.target.value)} placeholder='User Name'/>
                    <button className="btn profile_submit_btn">Filter</button>
                </form>
            </div>
            <div className='fetch-users'>
                <div className='fetch'>
                    {responses.map((response) => {
                        return <UserCard key={response.id} firstName={response.first_name} lastName={response.last_name} bio={response.bio} image={response.picture}/>
                    })};
                </div>

            </div>

        </div>
    );
}
export default Search
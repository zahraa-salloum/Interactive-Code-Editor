import { useState } from 'react';
import './search.css';
import UserCard from './user_card/user';
const Search = () => {
    const [user, setUser] = useState('');

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
                <div className='user_card'>
                    <h1>UserName</h1>
                    <img className='user-profile-img' src='#'/>
                    <p></p>
                    <button>Chat Now!</button>
                </div>
                <UserCard/>
            </div>

        </div>
    );
}
export default Search
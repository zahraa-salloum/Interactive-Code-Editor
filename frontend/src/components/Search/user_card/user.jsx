import '../search.css'
const UserCard = ({firstName, lastName, bio}) => {
    return(
        <div className='user_card'>
        <h1>{firstName} {lastName}</h1>
        <img className='user-profile-img' src='#'/>
        <p>{bio}</p>
        <button>Chat Now!</button>
    </div>
    );
}
export default UserCard
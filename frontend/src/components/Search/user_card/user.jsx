import '../search.css'
const UserCard = ({firstName, lastName, bio, image}) => {
    return(
        <div className='user_card'>
        <h1>{firstName} {lastName}</h1>
        <img className='user-profile-img' src={image}/>
        <p>{bio}</p>
        <button className="btn profile_submit_btn">Chat Now!</button>
    </div>
    );
}
export default UserCard
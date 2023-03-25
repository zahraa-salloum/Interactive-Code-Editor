import '../large_box/large_box.css';
const LargeBox = ({small_bio, title}) => {
    return (
        <div className='large-box'>
            <div className='top'>
                <p>{small_bio}</p>
            </div>
            <div className='bottom'>
                <h1>{title}</h1>
            </div>
        </div>
    );
}
export default LargeBox;
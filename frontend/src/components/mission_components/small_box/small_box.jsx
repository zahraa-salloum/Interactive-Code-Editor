import './small_box.css';
const SmallBox = ({small_bio, title}) => {
    return (
        <div className='small-container'>
            <div className='top'>
                <p>{small_bio}</p>
            </div>
            <div className='bottom'>
                <h1>{title}</h1>
            </div>
        </div>
    );
}
export default SmallBox;
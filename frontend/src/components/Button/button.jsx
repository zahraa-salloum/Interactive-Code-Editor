import './button.css';
const Button = ({name}) => {
    return (
        <button className='btn'>
            {name}
        </button>
    );
}
export default Button;
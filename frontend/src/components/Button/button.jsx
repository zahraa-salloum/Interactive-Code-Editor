import './button.css';
const Button = ({name, action}) => {
    return (
        <button className='btn' onClick={action}>
            {name}
        </button>
    );
}
export default Button;
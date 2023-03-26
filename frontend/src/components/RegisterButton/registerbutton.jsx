import './registerbutton.css';
const RegisterButton = ({name}) => {
    return (
        <button className='register_button'>
            {name}
        </button>
    );
}
export default RegisterButton;
import './registerbutton.css';
const RegisterButton = ({name,onSubmit}) => {
    return (
        <button className='register_button'onClick={onSubmit}>
            {name}
        </button>
    );
}
export default RegisterButton;
import './big_box.css';
import Button from '../../Button/button';
const BigBox = () => {
    return (
        <div className='big-box'>
            <div className='text-container'>
                <h3>Ready for you</h3>
                <h1>Better experience for the ones beginning their code journey </h1>
            </div>
            <div className='container-btn'>
                <Button name={'Start Now'}/>
            </div>
        </div>
    );
}
export default BigBox;
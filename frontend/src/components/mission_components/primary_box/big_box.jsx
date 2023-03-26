import './big_box.css';
import Button from '../../Button/button';
const BigBox = () => {
    return (
        <div className='big-box'>
            <div className='big_container'>
                <div className='small-text'>
                    <h3>Ready for you</h3>
                </div>
                <div className='big-text'>
                    <h1>Better experience for the ones beginning their code journey </h1>
                </div>
                
            </div>
            <div className='container-btn'>
                <Button name={'Start Now'}/>
            </div>
        </div>
    );
}
export default BigBox;
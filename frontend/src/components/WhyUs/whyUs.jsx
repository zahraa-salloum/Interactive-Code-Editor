import './why_benefit.css';
import Text from '../Text';
const WhyUs = () => {
    return (
        <div className='wrapper' id='whyus'>
            <div className='why-container'>
                <div className='img-why'></div>
                <Text title={'Why we are different from others online code editors'} 
                    content={"Our online code editor stands out from the rest for a number of reasons. Firstly, we offer a user-friendly and intuitive interface that makes it easy for users of all skill levels to write and execute code. In addition, our editor comes equipped with a wide range of powerful features and tools, including syntax highlighting, auto-completion, and error highlighting, to name just a few. But what really sets us apart is our commitment to providing unparalleled support to our users. Whether you're a seasoned developer or just starting out, we're here to help you achieve your coding goals and get the most out of our platform."}
                />
            </div>
        </div>
        
        
    );
}
export default WhyUs;
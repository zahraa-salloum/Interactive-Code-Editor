import './WhyUs/whyUs.css';
const Text = ({title, content}) => {
    return (
        <div className='right-side'>
            <div className='text-container'>
                <h1>{title}</h1>
                <p>{content}</p>    
            </div>
        </div>
    );
}
export default Text;
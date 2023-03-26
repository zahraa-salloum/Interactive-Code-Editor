import './WhyUs/why_benefit.css';
const Text = ({title, content}) => {
    return (
        <div className='text-wrapper'>
            <div className='title'>
                <h1>{title}</h1>
            </div>
            <div className='text'>
                <p>{content}</p>
            </div>
        </div>
    );
}
export default Text;
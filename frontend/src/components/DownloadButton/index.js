import './style.css';
const DownloadButton = ({name}) => {
    return (
        <button className='btn_download'>
            {name}
        </button>
    );
}
export default DownloadButton;
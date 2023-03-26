import './style.css';
const DownloadButton = ({name,onclick}) => {
    return (
        <button className='btn_download' onClick={onclick}>
            {name}
        </button>
    );
}
export default DownloadButton;
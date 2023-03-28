import {useState} from "react"

const Send =({handleOnClick}) => {

    const [messageContent, setMessageContent] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        handleOnClick(messageContent);
        setMessageContent('');
    }


    return(
        <>
        <div className="send_container">
        <form onSubmit={handleSubmit}>
                <input
                    placeholder="Type your message"
                    value={messageContent}
                    onChange={(event) => setMessageContent(event.target.value)}
                />
                <button type="submit"></button>
            </form>
        </div>
        </>
    )
}

export default Send
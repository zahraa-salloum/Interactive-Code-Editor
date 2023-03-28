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
        <form className="send_container_box" onSubmit={handleSubmit}>
                <input className="message_to_send"
                    placeholder="Type your message"
                    value={messageContent}
                    onChange={(event) => setMessageContent(event.target.value)}
                />
                <button className="btn submit_btn" type="submit">Send</button>
            </form>
        </div>
        </>
    )
}

export default Send
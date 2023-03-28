import {useState} from "react"

const Send =({onSubmit, onChange}) => {

  


    return(
        <>
        <div className="send_container">

                <input className="message_to_send"
                    placeholder="Type your message"
                    onChange={onChange}
                />
                <button className="btn submit_btn" type="submit" onClick={onSubmit}>Send</button>
        </div>
        </>
    )
}

export default Send
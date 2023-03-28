import {useState} from "react"

const Send =({onSubmit, onChange}) => {

  


    return(
        <>
        <div className="send_container">
<<<<<<< HEAD
                <input
=======
        <form className="send_container_box" onSubmit={handleSubmit}>
                <input className="message_to_send"
>>>>>>> 1b127f8ea1849bed31b63b7775482f4ecac4ca1f
                    placeholder="Type your message"
                    onChange={onChange}
                />
<<<<<<< HEAD
                <button onClick={onSubmit}>Send</button>
=======
                <button className="btn submit_btn" type="submit">Send</button>
            </form>
>>>>>>> 1b127f8ea1849bed31b63b7775482f4ecac4ca1f
        </div>
        </>
    )
}

export default Send
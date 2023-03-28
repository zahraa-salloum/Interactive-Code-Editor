import {useState} from "react"

const Send =({onSubmit, onChange}) => {

  


    return(
        <>
        <div className="send_container">
                <input
                    placeholder="Type your message"
                    onChange={onChange}
                />
                <button onClick={onSubmit}>Send</button>
        </div>
        </>
    )
}

export default Send
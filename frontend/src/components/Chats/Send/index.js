const Send =(onclick) => {

    return(
        <>
        <div className="send_container">
            <input placeholder="Type your message"></input>
            <button onClick={onclick}></button>
        </div>
        </>
    )
}

export default Send
import { useState } from "react"

const profileInput = ({ onChange, onSubmit, onUpload,first_name,bio, image,message}) => {

  return (
    <div className="profile_container">
    <div className="user_info">
    <h2 className="profile_title">Hello {first_name}</h2>
    <img className='user_image' src={image}/>
    <p className="profile_bio">{bio}</p>
    </div>
    <div className="update_info">
    <h2 className="profile_title">Edit your profile</h2>
      <h3 className="profile_label">Describe yourself</h3>
      <textarea className ="profile_textarea" name="description" rows="4" cols="50" onChange={onChange}></textarea>
      <input type ="file" name="profile_pic" onChange={onUpload}></input>
      <button className = "btn profile_submit_btn" onClick={onSubmit}>Submit</button>
      <p className="message">{message}</p>
    </div>
    </div>
  )
}

export default profileInput;
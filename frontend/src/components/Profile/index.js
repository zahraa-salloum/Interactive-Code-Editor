import { useState } from "react"

const profileInput = ({ onChange, onSubmit, onUpload }) => {

  return (
    <div className="profile_container">
    <h2 className="profile_title">Complete your profile</h2>
      <h3 className="profile_label">Describe yourself</h3>
      <textarea className ="profile_textarea" name="description" rows="4" cols="50" onChange={onChange}></textarea>
      <input type ="file" name="profile_pic" onChange={onUpload}></input>
      <button className = "btn profile_submit_btn" onClick={onSubmit}>Submit</button>
    </div>
    
  )
}

export default profileInput;
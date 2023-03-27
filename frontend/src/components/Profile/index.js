import { useState } from "react"

const profileInput = ({ onChange, onSubmit, onUpload }) => {

  return (
    <div>
      <h3 className="profile_label">Describe yourself</h3>
      <textarea name="description" rows="4" cols="50" onChange={onChange}></textarea>
      <input type ="file" name="profile_pic" onChange={onUpload}></input>
      <button onClick={onSubmit}>Submit</button>
    </div>
  )
}

export default profileInput;
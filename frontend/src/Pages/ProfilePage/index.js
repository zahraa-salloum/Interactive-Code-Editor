import { useEffect, useState } from "react";
import ProfileInput from "../../components/Profile/index.js";
import Dashboard from "../../components/Dashboard_NavBar/dashboard_nav";
import Footer from "../../components/Footer/footer.jsx";
import axios from "axios";
import NavBar from "../../components/NavBar/Nav.jsx";

const ProfilePage = () => {
  const [bio, setBio] = useState("");
  const [profile, setProfile] = useState("");

  const handleBioChange= (e) =>{
    setBio(e.target.value)
  }


  const handlePictureChange = (e) => {
    const picture = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result;
      setProfile(base64String);
    };
    reader.readAsDataURL(picture);
  };
  
const token = localStorage.getItem('token');

  const handleSubmit = async () =>{
    const data = new FormData();
    data.append('bio',bio);
    data.append('profile',profile);

     await axios.post('http://127.0.0.1:8000/api/v0.0.1/add_details',data,{
          headers: {
              Authorization: `Bearer ${token}`
          }
      }).then(response => {
          console.log(response.data)
      })
  }

  return (
    <div id="profile">
      <Dashboard/>
      <ProfileInput 
      onChange={handleBioChange}
      onSubmit={handleSubmit}
      onUpload={handlePictureChange} />
      <Footer />
    </div>
  )
}

export default ProfilePage;

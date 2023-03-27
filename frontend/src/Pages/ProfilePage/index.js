import { useEffect, useState } from "react";
import ProfileInput from "../../components/Profile/index.js";
import NavBar from "../../components/NavBar/Nav.jsx";
import Footer from "../../components/Footer/footer.jsx";
import axios from "axios";

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
  

  const handleSubmit = () =>{
    console.log(bio);
    console.log(profile);
  }

  return (
    <div>
      <NavBar></NavBar>
      <h1>Complete your profile</h1>
      <ProfileInput 
      onChange={handleBioChange}
      onSubmit={handleSubmit}
      onUpload={handlePictureChange} />
      <Footer></Footer>
    </div>
  )
}

export default ProfilePage;

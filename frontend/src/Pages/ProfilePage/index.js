import { useEffect, useState } from "react";
import ProfileInput from "../../components/Profile/index.js";
import Dashboard from "../../components/Dashboard_NavBar/dashboard_nav";
import Footer from "../../components/Footer/footer.jsx";
import axios from "axios";
import NavBar from "../../components/NavBar/Nav.jsx";

const ProfilePage = () => {
  const [bio, setBio] = useState("");
  const [profile, setProfile] = useState("");
  const [first_name, setName] = useState("");
  const [biography, setBiography] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");

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
          setMessage("Your profile has been updated");
          setTimeout(() => {
            window.location.reload()
          }, 500);
          
      })
      
  }

  useEffect(() => {
    const fetchUserData = async() => {
        await axios({
            method: 'Get',
            url: 'http://127.0.0.1:8000/api/v0.0.1/get_user',
            headers: {
                Authorization: 'Bearer ' + token
            }
        }).then((res) => {
            console.log(res.data);
            console.log(res.data[0].picture);
            setImage(res.data[0].picture);
            setBiography(res.data[0].bio);
            setName(res.data.user.first_name);

            // setResponses(res.data.users);
        }).catch((err) => {
            console.log(err);
        });
    }
    fetchUserData();
},[]);

  return (
    <div id="profile">
      <Dashboard/>
      <ProfileInput 
      onChange={handleBioChange}
      onSubmit={handleSubmit}
      onUpload={handlePictureChange}
      image={image}
      bio={biography}
      first_name = {first_name}
      message={message}
       />
      <Footer />
    </div>
  )
}

export default ProfilePage;

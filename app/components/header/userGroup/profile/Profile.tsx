import profilePic from "../../../../../public/profile.png"

const Profile = () => {
  return (
    <div className="profileImageContainer">
        <img className="profileImage" src={profilePic.src} alt="Joanna's Profile Image" />
    </div>
  )
}

export default Profile
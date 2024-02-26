import Profile from "./profile/Profile";
import Icon from "../../icon/Icon";
import profilePic from "../../../../public/profile.png";
import notificationIcon from "../../../../public/notifications.png";
import styles from "./styles.module.css"

const UserGroup = () => {
  return (
    <div className={styles.userGroupWrapper}>
      <Icon src={notificationIcon.src} size='medium'/>
      <Profile src={profilePic.src} />
    </div>
  );
};

export default UserGroup;

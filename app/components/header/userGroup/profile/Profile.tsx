import styles from './styles.module.css';

type ProfileProps = {
  src : string
}

const Profile = (props: ProfileProps) => {
  return (
    <div className={styles.profileImageContainer}>
        <img className={styles.profileImage} src={props.src} alt="Joanna's Profile Image" />
    </div>
  )
}

export default Profile
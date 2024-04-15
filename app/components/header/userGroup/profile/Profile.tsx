import Link from 'next/link';
import styles from './styles.module.css';

type ProfileProps = {
  src : string
}

const Profile = (props: ProfileProps) => {
  return (
    <div className={styles.profileImageContainer}>
      <Link href="/users">
        <img className={styles.profileImage} src={props.src} alt="Joanna's Profile Image" />
      </Link>
    </div>
  )
}

export default Profile
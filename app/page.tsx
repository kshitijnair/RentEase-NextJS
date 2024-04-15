import { useAppSelector } from '@/redux/store';

export default function Home() {
  const userName = useAppSelector((state) => state.authReducer.value.userName);
  return (
    <main><h1>Hello {userName}! :D</h1></main>
  )
}

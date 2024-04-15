"use client";

import Header from "../components/header/Header";
import { useAppSelector } from "@/redux/store";

const HomePage = () => {
  const userName = useAppSelector((state) => state.authReducer.value.userName);

  return (
    <div>
      <Header />
      <main>
        <h1>Hello {userName}! :D</h1>
      </main>
    </div>
  );
};

export default HomePage;

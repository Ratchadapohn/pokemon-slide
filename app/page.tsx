"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import "./globals.css";
import Image from "next/image";

export default function HomePage() {
  const [clicked, setClicked] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      router.push("/search");
    }, 300);
  };

  return (
    <div
      className={`grid place-items-center ${styles.container} ${
        clicked ? styles.slideUp : ""
      }`}
      onClick={handleClick}
    >
      <div className="flex flex-col justify-center items-center h-screen">
        <Image
          src="/images/pngaaa.com-192801.png"
          alt=""
          width={640}
          height={320}
          layout="responsive"
          className="mb-4 m-3 p-10"
        />

        <h1 className="text-center w-full text-lg md:text-xl lg:text-2xl">
          Welcome to your Pokemon world
        </h1>
      </div>
    </div>
  );
}

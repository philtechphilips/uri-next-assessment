"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push('/dashboard/applications')
  }, [])
  return (
    <>
      <h1>Home</h1>
    </>
  );
}

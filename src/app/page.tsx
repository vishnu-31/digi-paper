"use client";

import Paper from "@/components/paper";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";

export default function Home() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();
  if(!user){ 
    router.push("/home");
  }
  else{
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16 pt-4">
       <Paper />
    </main>
  );
  }
}

'use client';

import Paper from "@/components/paper";
import { useUser } from "@auth0/nextjs-auth0/client";


export default function Home() {
  const {user, error, isLoading} = useUser();
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-16 pt-4">
        {
        user ?
          <Paper/>
        :
          <p>You are not Logged In</p>
        }
      </main> 
    
  );
}

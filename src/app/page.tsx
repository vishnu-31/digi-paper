'use client';
import Login from "@/components/login";
import Paper from "@/components/paper";
import Signup from "@/components/signup";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16">
      <header className="text-3xl font-bold text-center w-full"> DigiPaper🖥️🗒️ </header>
      <Paper/>
    
    </main>
  );
}

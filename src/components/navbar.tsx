import { Button } from "./ui/button";
import Link from "next/link";


const NavBar = () => {
  return( 
    <div className="w-full flex h-6 m-0 mt-3 py-3 items-center justify-between">
      <div className="text-3xl font-bold w-full mx-3">  DigiPaper🖥️🗒️</div>
      <div>
        <ul className="flex gap-3 p-3">
          <li><Link href="/login"><Button>Login</Button></Link></li>
          <li><Link href="/signup"><Button>SignUp</Button></Link></li>
        </ul>
      </div>

    </div>
  );
}

export default NavBar;

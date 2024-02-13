import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import logo from "../../logo/DigiPaper.png"

const NavBar = () => {
  return( 
    <div className="w-full flex m-0 p-2 items-center justify-between">
      <div className="flex items-center text-3xl py-3 h-16 font-bold w-full "> 
        <Image src={logo} width={50} height={50} alt={"Logo of DigiPaper"}/>
        DigiPaper
      </div>
      <div>
        <ul className="flex gap-3 p-3">
          <li><Link href="/api/auth/login"><Button>Login</Button></Link></li>
          <li><Link href="/api/auth/login"><Button>SignUp</Button></Link></li>
        </ul>
      </div>

    </div>
  );
}

export default NavBar;

import Image from "next/image";

import logo from "../../../logo/DigiPaper.png"

const loggedOutPage = () =>{
  return(
    <main className="text-center flex items-center justify-center h-[90%]">
      <header className="flex text-4xl flex-wrap font-bold w-[60%]">
        You have successfully logged out of <Image src={logo} height={90} width={90} alt={"Logo of DigiPaper"}/>DigiPaper
      </header>
      
    </main>
  );
}

export default loggedOutPage;

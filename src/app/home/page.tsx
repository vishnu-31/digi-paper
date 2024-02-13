import logo from "@/../logo/DigiPaper.png";
import Image from "next/image";

const HomePage =() =>{
  return(
    <main className=" flex flex-col w-fit items-center text-center mx-auto">
        <div className="flex text-center items-center ">
          <Image width={90} height={90} src={logo} alt={"Logo of DigiPaper"} />
          <p className="text-4xl font-bold "> DigiPaper</p>
        </div>
        <div className="flex w-full text-center text-2xl font-semibold my-4 mx-2">
          Bring the flexibility and the creative canvas of a paper to the digital space. 
        </div>
    </main>

  );
}

export default HomePage;

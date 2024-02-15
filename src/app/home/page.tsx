import logo from "@/../logo/DigiPaper.png";
import Image from "next/image";
import { Lobster } from "next/font/google";
import {cn} from "@/lib/utils"

const lobster = Lobster({
  weight:['400'],
  subsets:['latin']
});

const HomePage =() =>{
  return(
    <main className=" flex flex-col w-fit items-center justify-between text-center mt-20 gap-40">
        <div className="flex text-center items-center ">
          <Image width={90} height={90} src={logo} alt={"Logo of DigiPaper"} />
          <p className={`text-4xl font-bold ${lobster.className}`}> DigiPaper</p>
        </div>
        <div className={cn("flex text-center text-2xl font-semibold mx-4 md:mx-auto",lobster.className)}>
          Bring the flexibility and the creative canvas of a paper to the digital space. 
        </div>
        <div className="flex items-end w-[100svw] ">
        <svg width="100%" height="70%" id="svg" viewBox="0 0 1440 490" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stopColor="#F78DA7"></stop><stop offset="95%" stopColor="#8ED1FC"></stop></linearGradient></defs><path d="M 0,500 L 0,125 C 97,138.21428571428572 194,151.42857142857144 319,135 C 444,118.57142857142857 597,72.5 716,74 C 835,75.5 920,124.57142857142856 1035,141 C 1150,157.42857142857144 1295,141.21428571428572 1440,125 L 1440,500 L 0,500 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="0.53" className="transition-all duration-300 ease-in-out delay-150 path-0"></path><defs><linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%"><stop offset="5%" stopColor="#F78DA7"></stop><stop offset="95%" stopColor="#8ED1FC"></stop></linearGradient></defs><path d="M 0,500 L 0,291 C 99.32142857142858,314.1428571428571 198.64285714285717,337.2857142857143 309,339 C 419.35714285714283,340.7142857142857 540.7499999999999,321 684,308 C 827.2500000000001,295 992.3571428571429,288.7142857142857 1122,287 C 1251.642857142857,285.2857142857143 1345.8214285714284,288.1428571428571 1440,291 L 1440,500 L 0,500 Z" stroke="none" strokeWidth="0" fill="url(#gradient)" fillOpacity="1" className="transition-all duration-300 ease-in-out delay-150 path-1"></path></svg>
      </div>

    </main>

  );
}

export default HomePage;

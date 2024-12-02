import heroimg from "../assests/hero.JPG"
import { AiOutlineLinkedin , AiOutlineInstagram ,AiOutlineGithub,AiOutlineMail} from "react-icons/ai";
import {useTypewriter,Cursor} from "react-simple-typewriter"
export default function Hero() {

    const [text]=useTypewriter({
        words:['Python'],
        loop:{},
        typeSpeed:200,
        deleteSpeed:100,
     });
     
    const config={
        subtitle:"Im a Full-Stack ",
      
        subtitle2:"Developer ",
    }
    const social={
        link:"https://www.linkedin.com/in/selvasundar?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BCXxzDX7aTOybG3SXmn1%2B6g%3D%3D/",
        link1:""
    }

    return <section id="hero"  className="flex flex-col md:flex-row px-10 bg-secondary justify-center ">
        <div className="md:w-1/2 flex flex-col">
            <h1 className=" -tracking-tighter text-4xl font-extrabold py-2 px-8 m-6 md:py-48">Hi, Im <span className="text-yellow-600 animate-colorCycle">Selva Sundar</span>
                <p className="py-5 -tracking-tighter">{config.subtitle}<span className="text-4xl font-extrabold bg-gradient-to-r from-blue-500 via-green-600 to-yellow-400 bg-clip-text text-transparent animate-shine">{text}</span> {config.subtitle2}</p>  
                {/* <button className="text-xl font-normal border-b-2 border-gray-700 rounded-lg w-20 bg-yellow-600 text-white">Hire Me</button> <button className="text-xl font-normal border-b-2  border-gray-700  rounded-lg w-36 hover:bg-yellow-600 text-yellow-600 hover:text-white">Download CV</button>     */}
            <div className="flex py-8 ">
                <a className="hover:text-blue-800" href={social.link}><AiOutlineLinkedin size={60}/></a>
                <a className="px-2 hover:text-pink-600" href=""><AiOutlineInstagram size={60}/></a>
                <a className="px-2 hover:text-red-600" href=""><AiOutlineMail size={60}/></a>
                <a className="px-2 " href={social.link1}><AiOutlineGithub size={60}/></a>
                
            </div>
            </h1>      
        </div>
       <img className="md:w-1/2  animate-bounce " src={heroimg} />
    </section>
}
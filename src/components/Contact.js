import { HiOutlineLocationMarker, HiPhone } from "react-icons/hi";
import { AiOutlineMail, AiOutlineWhatsApp,AiOutlineInstagram,AiOutlineLinkedin } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
export default function Contact() {

    const config={
         address:"1/112 Middle Street,Tuticorin",
         pincode:"628102",
         phone:"8754857830",
         email:"selvasundar6601@gmail.com",

    }
    return <section id="contact">
        <div className="text-center py-4">
            <h6 className="text-center font-semibold -tracking-tighter text-yellow-600 ml-16">CONTACT US</h6>
            <h1 className="text-center text-4xl font-semibold -tracking-tighter py-4 ml-16">Have a Project?</h1>
            <p className="text-center font-normal text-gray-500 -tracking-tighter ml-16"> I’m excited to collaborate on your next project. Feel free to reach out, and <br></br>let’s turn your ideas into reality.</p>
        </div>
        <div className="flex flex-col md:flex-row  gap-4 py-3">
            <div >
                <form className="md:px-24 px-4 ">
                    <input className=" -tracking-tighter border-gray-600 border-2 md:rounded md:w-[280px] h-[50px] px-4 mr-8 w-[200px] rounded  " type="text" placeholder="Your Name" />
                    <input className=" -tracking-tighter border-gray-600 border-2 mt-2 md:rounded md:w-[280px] h-[50px] px-4 mr-8 w-[200px] rounded" type="email" placeholder="Your Email" />
                    <br></br>
                    <input className=" -tracking-tighter border-gray-600 border-2 rounded md:w-[593px] h-[50px] px-4 mt-8 w-[432px]" type="text" placeholder="Subject" />
                    <br></br>
                    <textarea className=" -tracking-tighter border-gray-600 border-2 rounded md:w-[593px] h-[170px] px-4 mt-8 w-[432px]" placeholder="Message" />
                    <br></br>
                    <button className="bg-yellow-600 text-white w-[180px] h-[40px] rounded-lg border-2 border-gray-600 hover:border-black" >Send Message</button>
                </form>
            </div>
            <div className="md:flex flex-col  md:px-1 px-6">
                <p className="text-blue-900"><HiOutlineLocationMarker size={33} /></p>
                <p className="text-xl font-semibold">Address:</p>
                <p className="  font-normal -tracking-tighter  text-gray-500 py-1 ">{config.address}</p>
                <p className="  font-normal -tracking-tighter  text-gray-500 ">{config.pincode}</p>
                <br></br>
                <p className="text-green-600 "><HiPhone size={33} /></p>
                <p className="text-xl font-semibold">Phone:</p>
                <p className="  font-normal -tracking-tighter  text-gray-500 ">{config.phone}</p>
                <br></br>
                <p className="text-red-600"><AiOutlineMail size={33} /></p>
                <p className="text-xl font-semibold">Email:</p>
                <p className="  font-normal -tracking-tighter  text-gray-500 ">{config.email}</p>
            </div>
        </div>

        <div className="flex flex-col px-7 w-[500px] md:w-full md:flex-row  md:px-24 py-8 gap-8 bg-gray-300 ">
            <div>
                <h1 className="text-xl font-semibold -tracking-tighter">Lets talk about</h1>
                <p className=" text-gray-600 font-normal -tracking-tighter py-4 ">With expertise in HTML, CSS, JavaScript,<br></br> React JS, SQL, and Python,
                    I create seamless <br></br>web experiences that are both functional<br></br> and visually appealing.</p>
                <button className="bg-yellow-600 text-white w-[100px] h-[30px] rounded-lg border-2 border-gray-600 hover:border-black" >Learn More</button>
            </div>

            <div className="pl-10 md:px-14">
                <h1 className="text-xl font-semibold -tracking-tighter">Links</h1>
                <ul className="py-4 ">
                    <li className="text-yellow-600 underline underline-offset-4 -tracking-tighter "><a href="#">⮞HOME</a></li>
                    <li className='hover:underline hover:decoration-yellow-600 underline-offset-4 -tracking-tighter  text-gray-600 py-2'><a href="#about">⮞ABOUT</a></li>
                    <li className='hover:underline  hover:decoration-yellow-600 underline-offset-4 -tracking-tighter  text-gray-600'><a href="#skills~">⮞SKILLS</a></li>
                    <li className='hover:underline  hover:decoration-yellow-600 underline-offset-4 -tracking-tighter  text-gray-600 py-2'><a href="#project">⮞PROJECTS</a></li>
                    <li className='hover:underline  hover:decoration-yellow-600 underline-offset-4 -tracking-tighter  text-gray-600'><a href="#resume">⮞RESUME</a></li>
                    <li className='hover:underline  hover:decoration-yellow-600 underline-offset-4 -tracking-tighter  text-gray-600 py-2'><a href="#contact">⮞CONTACT</a></li>
                </ul>
            </div>

            <div className="px-10">
                <h1 className="text-xl font-semibold -tracking-tighter">Services</h1>
                <p className="py-4  text-gray-600 -tracking-tighter">⮞Web Design</p>
                <p className=" text-gray-600 -tracking-tighter">⮞Web Development</p>
            </div>

            <div className="px-5">
                <h1 className="text-xl font-semibold -tracking-tighter">Follow us</h1>
                <br></br>
                <div className="flex">
                <a className="hover:text-blue-800 " href=""><AiOutlineLinkedin size={25}/></a>
                <a className="px-2 hover:text-pink-700" href=""><AiOutlineInstagram size={25}/></a>
                <a className="px-2 hover:text-green-600" href=""><AiOutlineWhatsApp size={25}/></a>
                <a className="px-2 hover:text-red-600" href=""><AiOutlineMail size={25}/></a>
                </div>
               
            </div>

        </div>
        
        <div className="text-center w-[500px] md:w-full  text-gray-900 font-normal -tracking-tighter py-2 bg-yellow-600">
       
            <h2>Copyright ©2024 All rights reserved | This template is made with ‪‪❤︎‬ by Selva Sundar</h2>
        </div>


    </section>
}
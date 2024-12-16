import resume from "../assests/resume.png"
export default function Resume(){
   
    const config={

        link:"https://drive.google.com/file/d/1boGKtMi4rnSrTWs8FkQgE3VDoXXWmA5N/view?usp=drive_link"
    }

    return <section id="resume" className="flex flex-col md:flex-row bg-primary px-10">
    <div className=" py-5 md:w-1/2 px-5  ">
        <img className="w-[400px] ml-9 md:ml-0 rounded-lg" src={resume} />
    </div>
    <div className=" px-10 flex justify-center md:w-1/2 ">
    <div className="flex flex-col justify-center text-black">
        <h1 className="text-4xl font-semibold -tracking-tighter ml-36 md:ml-16">Resume</h1>
        <p className=" text-gray-600 font-normal -tracking-tighter py-2 ml-16 w-[300px]  md:mr-40 " >My resume highlights my technical skills, projects, and the value I bring to a team. Feel free to download a copy to explore how I can contribute to your organization."  </p>
        
        <a className="btn ml-40 md:ml-16 "href={config.link}>Download</a>

    </div>
        
            
        

    </div>
</section>
}
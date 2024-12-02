import louis from "../assests/louis.png"
import ice from '../assests/ice.png'
import bus from "../assests/bus.jpg"
export default function Project() {

    const config = {
        projects: [
            {
                image: louis,
                description: "Ecommerce Website. Built With Html and Css only.",
                link: ""
            },
            {
                image: ice,
                description: "Ice Cream Ecommerce Website.Built With Html,Css,Javascript and React Js",
                link: ""
            },
            {
                image: bus,
                description: "Basic Bus Ticket Booking.Built With Python using Pycharm",
                link: ""
            }
        ]
    }

    return <section id="project" className="flex flex-col py-5 px-5 text-black justify-center">
        <div className="w-full text-center">
            <h1 className="text-center text-4xl font-semibold py-4 ml-20 md:ml-0 "> Our Projects</h1>
            <p className="px-2 pb-4 from-neutral-100 text-gray-600 -tracking-tighter ml-10 w-full md:ml-0">These are some of my best projects.I Have Built With Javascript,React Js,Css and Python.Check Them Out.</p>
        </div>
        <div className="w-full py-4">
            <div className="flex flex-col px-10 justify-around md:flex-row gap-6 ">
                {config.projects.map((project) => (
                    <div className="relative ml-16">
                        <img className="w-[350px] md:h-[220px] md:w-[350px] border-2 border-gray-800 rounded " src={project.image} />
                        <div className="project-desc right-0">
                            <p className="text-center  text-black font-semibold  py-10">{project.description}</p>                    
                                <a className="btn"  target="_blank" href={project.link} >View More</a>
                        </div>

                    </div>
                ))}

            </div>

        </div>
    </section>
}
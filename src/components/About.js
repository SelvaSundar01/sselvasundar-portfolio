import Aboutimg from "../assests/about.png"
import music from "../assests/music.png"
import sport from "../assests/sport.png"
import movie from "../assests/movie.png"
import travel from "../assests/travel.png"
export default function About() {

      const config={
        line1:"Hello! I'm Selva, a passionate and dedicated Full Stack Developer from Tuticorin. ",
        line2:"With expertise in HTML, CSS, JavaScript, React JS, SQL, and Python,",
        line3:" I create seamless web experiences that are both functional and visually appealing."
      }

    return <section id="about" className="flex flex-col md:flex-row bg-primary px-10  ">
        <div className="md:w-1/2 ">
            <img className="hidden md:block w-[500px] h-fullgi" src={Aboutimg} />
        </div>
        <div className="md:w-1/2 flex justify-center ">
            <div className="flex flex-col pb-34 justify-center">
                <h4 className="text-yellow-600 font-semibold -tracking-tighter">MY INTRO</h4>
                <h2 className="text-4xl font-semibold py-2  ">About Me</h2>
                <p className="py-6 text-gray-600 -tracking-tighter">{config.line1}<br></br>{config.line2}<br />{config.line3}</p>
                
                <div className="flex gap-10  ">
                    <div>
                        <h3 className="font-semibold -tracking-tighter py-4 ">Name:</h3>
                        <h3 className="font-semibold -tracking-tighter ">D.O.B:</h3>
                        <h3 className="font-semibold -tracking-tighter py-4 ">Address:</h3>
                        <h3 className=" font-semibold -tracking-tighter ">Code:</h3>
                        <h3 className="font-semibold -tracking-tighter py-4">Email:</h3>
                        <h3 className="font-semibold -tracking-tighter ">Phone:</h3>
                    </div>

                    <div >
                        <p className=" font-semibold text-yellow-600 -tracking-tighter py-4 ">S.Selva Sundar</p>
                        <p  className="font-semibold text-yellow-600 -tracking-tighter">May 01 2000</p>
                        <p  className="font-semibold text-yellow-600 -tracking-tighter py-4"> Tuticorin</p>
                        <p  className="font-semibold text-yellow-600 -tracking-tighter">628102</p>
                        <p className=" font-semibold text-yellow-600 -tracking-tighter py-4"> selvasundar6601@gmail.com</p>
                        <p className=" font-semibold text-yellow-600 -tracking-tighter"> 8754857830</p>

                    </div>
                </div>

                <div className="flex w-10 py-6">
                    <img src={music} /><span className="px-4 py-2 font-semibold">Music</span>
                    <img src={sport} /><span className="px-4 py-2 font-semibold">Sport</span>
                    <img src={movie} /><span className="px-4 py-2 font-semibold">Movie</span>
                    <img src={travel} /><span className="px-4 py-2 font-semibold">Travel</span>
                </div>
            </div>

        </div>
    </section>
}
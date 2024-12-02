import html from "../assests/html.jpeg"
import css from "../assests/css.png"
import js from "../assests/js.png"
import react from '../assests/react.png'
import tailwind from "../assests/tailwind.png"
import python from "../assests/python.png"
import sql from "../assests/sql.png"
import git from "../assests/git.png"

export default function Skill() {
    return <section id="skills">
        <div >
            <div className="ml-14" >
                <h5 className="text-center font-semibold -tracking-tighter text-yellow-600">SKILLS</h5>
                <h1 className="text-center text-4xl font-semibold py-4">My Skills</h1>
                <p className="text-center px-10 font-normal text-gray-500 -tracking-tighter">Skilled in HTML, CSS, JavaScript, React JS, Python, SQL, and responsive web design with a focus on full stack development.</p>
            </div>
            <div className="flex flex-wrap md:px-10 md:py-10 justify-evenly">
                {[
                    { title: 'HTML', src: html },
                    { title: 'CSS', src: css },
                    { title: 'JAVASCRIPT', src: js },
                    { title: 'REACT JS', src: react },
                    { title: 'TAILWIND', src: tailwind },
                    { title: 'SQL', src: sql },
                    { title: 'PYTHON', src: python },
                    { title: 'GITHUB', src: git },
                ].map((item, index) => (
                    <div key={index} className="flex flex-col ml-16 md:ml-0 items-center mb-6">
                        <h1 className="text-center py-16 font-bold text-xl">{item.title}</h1>
                        <img
                            className="w-[130px] h-[130px] md:w-[240px] md:h-[240px] animate-bounce"
                            src={item.src}
                            alt={`${item.title} Logo`}
                        />
                    </div>
                ))}
            </div>



        </div>

    </section>
}
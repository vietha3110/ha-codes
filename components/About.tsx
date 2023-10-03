import Link from "next/link";
const About = () => {
    return (
        <div
            id='about'
            className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About
                    </p>
                </div>
                <p className="text-xl mt-5">
                    I am an aspiring full-stack software engineer based in Greater Seattle Area, WA. I have been sharpening my coding skills at App Academy Full-time Software Engineering Program. My toolkit includes JavaScript, Python, TypeScript, React, Redux, Node, Express, SQL, SQLAlchemy, Flask, and Postgres. I have tackled a variety of projects, from full-stack web apps to algorithmic puzzles. And if that is not enough, I even have a few years of experience in the exciting world of fintech, e-commerce, and e-logistics as a Product Ops Manger. In this role, I gained expertise in product operations and management, strategy planning, user experience, project management and data analysis. I like to think of myself as a jack-of-all-trades, but do not just take my word for it 😂. Check out my <Link href="portfolio"  style={{fontWeight:"600", cursor:"pointer"}}>projects </Link> and see for yourself.
                </p>
                <br />
            </div>
        </div>
    )
}

export default About;

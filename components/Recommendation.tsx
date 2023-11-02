import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
export default function Recommendation() {
   
    const recoms = [
        {
            id: 1, 
            name: 'Sanjay Agarwal', 
            title: 'VC Advisor, Ex-Linkedin', 
            words: 'Ha worked in the capacity of founding engineer at UnifyIQ under mine and CTOs guidance. She took a keen interested in understanding the product from day 1. She integrated with rest of the team (mostly interns who had joined us for summer) and instantly became their mentor. She took the ownership of full FE for the enterprise product and proposed react framework to build it. She was also full stack for some features as needed coding APIs in python. She was excellent in coding in both react/js and flask/python. She introduced new libraries in both framework to get the job done. The most I like about her is that she is self motivated and needed little guidance to get her work done. She also cares about her productivity, and proposed new UI features when founders needed some time to do the product roadmap planning '
        }, 
        {
            id: 2, 
            name: 'Joonil Kim', 
            title: 'Software Engineer at QA Wolf', 
            words: `It is my pleasure to recommend Ha Nguyen for her outstanding work in full-stack software development during the time we worked together for a project, RocketHood. I was impressed with Ha's passion and dedication for development. She was working around the clock for the project so that we could have favorite stock feature. Her front-end and back-end skills were valuable to our team.  
            Ha is making progress everyday, which was essential to software engineers. She always polishes her skills such as React, Redux, Python Flaks as well as plain javascript.
            Overall, I highly recommend Ha Nguyen to anyone looking for a full-stack developer. She is a dedicated professional with excellent skills, and She would make an excellent addition to any team or organization. I'm confident that she will bring the same level of enthusiasm, energy, and skills to their future endeavors.`
        },
        {
            id: 3, 
            name: 'Yen Phan', 
            title: 'MS Student in Data Science', 
            words: `I worked with Ha for ~2 years while she led a Product Ops team at VNG. I was impressed by her skills and attitude, not only be able to quickly grasp sophisticated technical problems but also be a very supportive teammate.
            Witnessing her passion and effort to transition deeper into tech, I saw her hard work towards developing technical skills, especially JavaScript, Python, Sql, etc. I strongly believe that Ha will be a value member and highly recommend her to any organization looking for a versatile developer who can deliver high quality work with her eagerness and skills.`
        }, 
    ]
    return (
        <div
            id='recommendation'
            className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'
        >   
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        Recommendations
                    </p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        recoms.map(ele => 
                            <Card key={ele.id} className='rounded-md duration-200 hover:scale-105 h-[80] w-full bg-gradient-to-b text-white'>
                                <CardHeader>
                                    <CardTitle>{ele.name}</CardTitle>
                                    <CardDescription>{ele.title}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>{ele.words}</p>
                                </CardContent>
                            </Card>
                        )
                    }
                </div>
            
            </div>
        </div>
        
    )
}
  
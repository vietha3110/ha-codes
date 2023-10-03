import Profile from '@/public/assets/Profile.jpeg';
import Link from 'next/link'
import Image from 'next/image';
const Home = () => {
    return (
        <div 
            id='home'
            className='h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white'
        >
            <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
                <div className='flex flex-col justify-center h-full w-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white w-full'>
                        I am a Full Stack Developer
                    </h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        A small-town software engineer trying to make it big in the tech world.
                    </p>
                    <div>
                        <div className='text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            <Link href='portfolio' >Portfolio</Link>
                        </div>
                    </div>
                </div>
                <div className='justify-center items-center hidden md:flex'>
                    <Image
                        src={Profile}
                        alt='my profile'
                        style={{width: "25rem", borderRadius:"2rem", }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;

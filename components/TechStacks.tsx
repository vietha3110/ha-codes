import javascript from '@/public/assets/techstacks/javascript.svg';
import python from '@/public//assets/techstacks/python.svg';
import react from '@/public//assets/techstacks/react.svg';
import redux from '@/public/assets/techstacks/redux.svg';
import nodejs from '@/public/assets/techstacks/nodejs-icon.svg';
import express from '@/public/assets/techstacks/express.svg';
import flask from '@/public/assets/techstacks/flask.svg';
import postgresql from '@/public/assets/techstacks/postgresql.svg';
import sqlite from '@/public/assets/techstacks/sqlite.svg';
import css from '@/public/assets/techstacks/css-3.svg';
import html from '@/public/assets/techstacks/html-5.svg';
import git from '@/public/assets/techstacks/git-icon.svg';
import tailwind from '@/public/assets/techstacks/tailwindcss.svg';
import prisma from '@/public/assets/techstacks/prisma-2.svg';
import Image from 'next/image';
const TechStacks = () => {
    const techs = [
        {
            id: 1, 
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-orange-50'
        }, 
        {
            id: 2,
            src: python,
            title: 'Python',
            style: 'shadow-orange-50'
        }, 
        {
            id: 3, 
            src: react,
            title: 'React',
            style: 'shadow-orange-50'
            
        },
        {
            id: 4, 
            src: redux,
            title: 'Redux',
            style: 'shadow-orange-50'
        }, 
        {
            id: 5,
            src: nodejs,
            title: 'Nodejs',
            style: 'shadow-orange-50'
        }, 
        {
            id: 6, 
            src: express,
            title: 'Express',
            style: 'shadow-orange-50'
            
        },
        {
            id: 7, 
            src: flask,
            title: 'Flask',
            style: 'shadow-orange-50'
        }, 
        {
            id: 8,
            src: postgresql,
            title: 'PostgreSQL',
            style: 'shadow-orange-50'
        }, 
        {
            id: 9, 
            src: sqlite,
            title: 'sqLite',
            style: 'shadow-orange-50'
            
        },
        {
            id: 10, 
            src: css,
            title: 'CSS',
            style: 'shadow-orange-50'
        }, 
        {
            id: 11,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-50'
        }, 
        {
            id: 12, 
            src: git,
            title: 'Git',
            style: 'shadow-orange-50'
        },
        {
            id: 13, 
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-orange-50'
        },
        {
            id: 14, 
            src: prisma,
            title: 'Prisma',
            style: 'shadow-orange-50'
        },
    ]
    return (
        <div
            id='technologies'
            className='bg-gradient-to-b from-gray-800 to-black text-white md:h-screen'
        >
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        Technologies
                    </p>
                    <p className='py-6'>
                        What technologies I have worked with
                    </p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 w-full'>
                    {
                        techs.map(({ id, src, title, style }) => (
                            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <Image
                                    src={src}
                                    alt="my tech"
                                    className='2-20 mx-auto h-20'
                                    width={400}
                                    height={300}
                                />
                                <p className='text-center py-1'>
                                    {title}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TechStacks; 

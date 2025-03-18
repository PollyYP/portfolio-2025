import React from 'react'
import Link from "next/link";

const Projects = () => {
  return (
    <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">Projects</h2>
        <h1 className="text-3xl font-bold">Team Projects</h1>
        <section className="p-4 lg:p-8">
            <div className="container mx-auto space-y-12">
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                    <img src="/watering.jpg" alt="" className="h-96 w-1/2 bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                        <span className="text-xs uppercase dark:text-gray-400">Frontend</span>
                        <h3 className="text-3xl font-bold">Water My Plants</h3>
                        <p className="my-6 dark:text-gray-400">
                            A user-friendly app designed to help users maintain optimal watering schedules for their plants.
                            As a key member of the development team, I was responsible for designing the intuitive UI and implementing
                            frontend functionalities, ensuring a seamless user experience. The app features customizable watering reminders,
                            making it an indispensable tool for plant enthusiasts.
                        </p>
                        <div className="mt-10 lg:mt-8">
                            <Link
                            href= "https://github.com/BUILD-WEEK-TT-WEBPT-102/FRONT-END" target="_blank"
                            className="inline-flex items-center space-x-2 text-cyan-700 text-lg font-semibold hover:opacity-75 sm:px-4 sm:text-base">
                               <span>Github Repo</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </Link>
                            <Link href= "https://water-my-plant-front-end-lzilyq8km-bwwebpt102.vercel.app/" target="_blank"
                             className="inline-flex items-center space-x-2 text-cyan-700 text-lg font-semibold hover:opacity-75 sm:px-4 sm:text-base">
                                <span>Live</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </Link>
                            </div>
                    </div>
                </div>
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
                    <img src="/trainer.jpg" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                        <span className="text-xs uppercase dark:text-gray-400">Backend</span>
                        <h3 className="text-3xl font-bold">Anywhere Fitness</h3>
                        <p className="my-6 dark:text-gray-400">
                        A web application designed to simplify the management of on-location fitness classes.
                        I developed the backend using PostgreSQL and Node.js, creating the database, models,
                        schema, and CRUD endpoints, collaborated with the frontend team for seamless integration,
                        and deployed the solution on Heroku to facilitate attendance, payments, and client communications efficiently.
                        </p>
                        <div className="flex justify-end items-center mt-8 lg:mt-7">
                        <Link
                            href= "https://github.com/Build-Week-anywhere-fitness-5/backend" target="_blank"
                            className="inline-flex items-center space-x-2 text-cyan-700 text-lg font-semibold hover:opacity-75 sm:px-4 sm:text-base">
                               <span>Github Repo</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <h1 className="text-3xl font-bold">Solo Projects</h1>
                <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
                    <img src="https://source.unsplash.com/640x480/?3" alt="" className="h-80 dark:bg-gray-500 aspect-video" />
                    <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
                        <span className="text-xs uppercase dark:text-gray-400">Join, it's free</span>
                        <h3 className="text-3xl font-bold">We're not reinventing the wheel</h3>
                        <p className="my-6 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor aliquam possimus quas, error esse quos.</p>
                        <button type="button" className="self-start">Action</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Projects
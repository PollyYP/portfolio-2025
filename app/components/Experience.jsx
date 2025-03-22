import React from 'react'
import Link from 'next/link'

function Experience() {
  return (
    <section>
        <div className="container p-6 mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">Experience</h2>
            <div className="mt-12 grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-2">
                <article>
                    <div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative" style={{height: '24em'}}>
                    <div className="absolute left-0 bottom-0 w-full h-full z-10"
                    style={{ backgroundImage: 'linear-gradient(180deg, transparent, rgba(0,0,0,0.7))' }}></div>
                    <img src="/promise.jpg" className="absolute left-0 top-0 w-full h-full z-0 object-cover opacity-70" />
                    <div className="p-4 absolute bottom-0 left-0 z-20">
                        <Link
                        target="_blank"
                        href="https://github.com/BloomTech-Labs/family-promise-case-mgmt-fe"
                        className="px-4 py-1 bg-black text-gray-200 inline-flex space-x-2 items-center justify-center mb-2"
                        >
                            <span>Github Repo</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </Link>
                            <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                            Family Promise - Frontend
                            </h2>
                            <div className="flex mt-3">
                                <img src="/bloomtech.png" alt='Bloom Tech Logo' className="h-10 w-10 rounded-full mr-2 object-cover" />
                                <div>
                                <p className="font-semibold text-gray-200 text-sm"> Bloom Tech Lab </p>
                                <p className="font-semibold text-gray-400 text-xs"> February 2022 </p>
                                </div>
                            </div>
                    </div>
                    </div>
                    <div className="px-4 lg:px-0 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed border-x border-b">
                        <p className="mx-6 pt-12 pb-6 text-justify">
                        Family Promise is an organization committed to helping local communities harness their collective compassion
                        to tackle the root causes of family homelessness. The organization strategically utilizes existing local resources
                        to empower families toward economic stability. Often, families reach out to Family Promise in times of crisis,
                        seeking assistance to rebuild their lives. The organization adopts a holistic approach to address these challenges,
                        providing a spectrum of services that include prevention efforts to support families before they reach a crisis,
                        shelter and case management during episodes of homelessness, and stabilization programs once families secure housing.
                        This comprehensive support system ensures that families not only regain their independence but also sustain it.
                        </p>
                        <h2 className="mx-6 text-2xl text-gray-800 font-semibold mb-4">My Role and Contributions</h2>
                        <p className="mx-6 pb-6 text-justify">
                        As part of a real-world project for Family Promise, an organization dedicated to addressing family homelessness,
                        I contributed to the development of a crucial component: the Family List Table. This feature enhances the capabilities
                        of caseworkers by providing a comprehensive view of the head of households and their assigned case managers.
                        </p>
                        <ul class="mx-6 list-disc list-inside text-justify mb-6">
                            <li className='py-2'><span className='font-bold'>UI Implementation:</span> Created the Family List Table using Ant Design to ensure a user-friendly interface
                            that seamlessly integrates with the existing system architecture.
                            </li>
                            <li className='py-2'><span className='font-bold'>Data Handling:</span> Implemented functionality to fetch and render data from a mock API, simulating real-world
                            data interactions which were crucial for the testing phase.
                            </li>
                            <li className='py-2'><span className='font-bold'>Enhanced Usability:</span> Added direct links to detailed family profiles, enabling caseworkers to access
                            individual family details with ease, thereby improving navigation and efficiency.
                            </li>
                            <li className='py-2'><span className='font-bold'>UI Refinement:</span> Grouped related data fields into single columns to optimize table space and
                            readability. Added color-coded tags to signify different case statuses, enhancing visual guidance for users.
                            </li>
                            <li className='py-2'><span className='font-bold'>Collaboration and Version Control:</span> Worked closely with team members and stakeholders to ensure consistent
                            and efficient progress. Utilized Git for version control, facilitating effective collaboration and code management.
                            </li>
                        </ul>
                    </div>
                </article>
                <article>
                    <div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative" style={{height: '24em'}}>
                    <div className="absolute left-0 bottom-0 w-full h-full z-10"
                    style={{ backgroundImage: 'linear-gradient(180deg, transparent, rgba(0,0,0,0.7))' }}></div>
                    <img src="/kidscreen.jpg" className="absolute left-0 top-0 w-full h-full z-0 object-cover opacity-70" />
                    <div className="p-4 absolute bottom-0 left-0 z-20">
                        <Link
                        target="_blank"
                        href="https://github.com/BloomTech-Labs/scribble-stadium-fe"
                        className="px-4 py-1 bg-black text-gray-200 inline-flex space-x-2 items-center justify-center mb-2"
                        >
                            <span>Github Repo</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </Link>
                            <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                            Scribble Stadium - Frontend
                            </h2>
                            <div className="flex mt-3">
                                <img src="/bloomtech.png" alt='Bloom Tech Logo' className="h-10 w-10 rounded-full mr-2 object-cover" />
                                <div>
                                <p className="font-semibold text-gray-200 text-sm"> Bloom Tech Lab </p>
                                <p className="font-semibold text-gray-400 text-xs"> January 2022 </p>
                                </div>
                            </div>
                    </div>
                    </div>
                    <div className="px-4 lg:px-0 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed border-x border-b">
                        <p className="mx-6 pt-12 pb-6 text-justify">
                        Scribble Stadium is an interactive learning platform tailored for grade school children, designed to enhance reading comprehension,
                        artistic, writing, and critical thinking skills through engaging weekly competitions. Participants engage with a serialized novel,
                        create related art and fanfiction, and compete in a bracket-style tournament. This platform not only fosters educational growth
                        but also promotes teamwork and critical thinking through a unique voting system.
                        </p>
                        <h2 className='mx-6 text-2xl text-gray-800 font-semibold mb-4 mt-4'>My Role and Contributions</h2>
                        <p className='mx-6 pb-6 text-justify'>
                        As a developer on the Scribble Stadium project, I significantly enhanced the user interface and interactivity of the platform,
                        focusing on the navigation and informational aspects to improve user engagement and comprehension.
                        </p>
                        <ul className='mx-6 list-disc list-inside text-justify mb-6'>
                            <li className='py-2'><span className='font-bold'>Enhanced Navigation:</span> Implemented a user-friendly modal using Ant Design components,
                            providing clear instructions for navigating the read, draw, and write steps. This feature was crucial for ensuring that
                            young users and their parents could effectively use the platform without confusion.
                            </li>
                            <li className='py-2'><span className='font-bold'>Interactive Design Enhancements:</span> Redesigned the user interface for Scribble Stadium by introducing a dropdown
                            bubble-themed info modal with a lightbulb icon trigger, enhancing aesthetic appeal and intuitiveness. The new design also features interactive
                            enhancements such as a hand pointer cursor on hover, making the platform more engaging for young users.
                            </li>
                            <li className='py-2'><span className='font-bold'>Accessibility and Usability Improvements:</span> Focused on making the platform more accessible and visually appealing to
                            enhance user engagement. By adjusting the background color, font family, and adding graphical elements like arrows in the tips bubble, I ensured that the
                            informational content was easy to read and aesthetically pleasing. These changes were aimed at improving the readability and visual engagement for children,
                            facilitating a more enjoyable and accessible learning experience.
                            </li>
                            <li className='py-2'><span className='font-bold'>Collaboration and Code Quality:</span> In collaboration with team members like Felipe Slaughter-Quintero, I focused on
                            maintaining high code quality by participating in code reviews, managing version control, and cleaning up unused code.
                            This collective effort helped enhance the platform’s functionality and maintainability.
                            </li>
                        </ul>
                    </div>
                </article>
            </div>
        </div>
    </section>
  )
}

export default Experience
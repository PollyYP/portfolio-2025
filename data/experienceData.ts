export interface Experience {
  id: number;
  title: string;
  image: string;
  logo: string;
  github?: string;
  liveUrl?: string;
  org: string;
  date: string;
  description: string;
  role: string;
  screenshots?: string[];
}


  export const experienceData: Experience[] = [
    {
      id: 1,
      title: 'Sho Order Board App',
      image: '/orderboardPreview.png',
      logo: '/shoLogo.png',
      liveUrl: 'https://sho-order-board-git-main-pollyyps-projects.vercel.app/login',
      org: 'Sho Sushi & Izakaya',
      date: 'August 2025',
      description: `Sho Order Board is an internal web app that centralizes ingredient and supply requests for our team.
    Employees submit items with quantity, vendor, prep station, requester, and requested date.
    The board groups items by vendor, shows a running total for supported vendors to help meet minimums,
    and lets managers mark items as ordered. An ASAP tag highlights urgent needs.
    Everyone sees real time updates so the kitchen and managers stay in sync across devices.`,
      role: `Built end to end with Next.js, TypeScript, Tailwind CSS, Firebase Auth, and Firestore.
    - Role based access, security rules, and server timestamps for audit fields.
    - Real time listeners with onSnapshot plus optimistic UI for fast interactions.
    - Vendor filters and per vendor total calculation for Baldor, Keany, IGF, and Restaurant Depot.
    - ASAP workflow that only the original requester can toggle to flag urgent reorders.
    - Order history view with date range search and a PastOrder collection.
    - SMS notifications to specific chef (order ready and exception alerts).
    - Responsive UI with cards and badges to match the portfolio preview pattern.
    - Deployed on Vercel with environment secrets and error handling.`,
      screenshots: [
        '/orderboard1.png',
        '/orderboard2.png',
        '/orderboard3.png',
      ],
    },
    {
      id: 2,
      title: 'Restaurant Website',
      image: '/shoHomePage.png',
      logo: '/shoLogo.png',
      liveUrl: 'https://www.shosushimclean.com/',
      org: 'Sho Sushi & Izakaya',
      date: 'April 2025',
      description: `Sho Sushi & Izakaya needed a website to serve as an official hub for announcing restaurant details, showcasing the menu, displaying business hours and location, and enabling customers to place online orders and make reservations.`,
      role: `Designed, developed, and launched the official restaurant website using Next.js and Tailwind CSS. The site integrates third-party services such as Toast for online orders, Resy for reservations, and EmailJS for handling contact form submissions.`
    },

    {
      id: 3,
      title: 'Family Promise - Frontend',
      image: '/promise.jpg',
      github: 'https://github.com/BloomTech-Labs/family-promise-case-mgmt-fe',
      org: 'Bloom Tech Lab',
      date: 'February 2022',
      logo: '/bloomtech.png',
      description: `Family Promise is an organization committed to helping local communities harness their collective compassion` +
      `to tackle the root causes of family homelessness. The organization strategically utilizes existing local resources` +
      `to empower families toward economic stability. Often, families reach out to Family Promise in times of crisis,` +
      `seeking assistance to rebuild their lives. The organization adopts a holistic approach to address these challenges,` +
      `providing a spectrum of services that include prevention efforts to support families before they reach a crisis,` +
      `shelter and case management during episodes of homelessness, and stabilization programs once families secure housing.` +
      `This comprehensive support system ensures that families not only regain their independence but also sustain it.`,
      role: `As part of a real-world project for Family Promise, I contributed to the development of a crucial component: the Family List Table. This feature enhances the capabilities of caseworkers by providing a comprehensive view of the head of households and their assigned case managers.

      - UI Implementation: Created the Family List Table using Ant Design to ensure a user-friendly interface.

      - Data Handling: Implemented functionality to fetch and render data from a mock API.

      - Enhanced Usability: Added links to detailed family profiles, improving navigation and efficiency.

      - UI Refinement: Grouped related data and used color-coded tags for case statuses.

      - Collaboration and Version Control: Worked with stakeholders and used Git for version control.`
    },

    {
        id: 4,
        title: 'Scribble Stadium - Frontend',
        image: '/kidscreen.jpg',
        github: 'https://github.com/BloomTech-Labs/scribble-stadium-fe',
        org: 'Bloom Tech Lab',
        date: 'January 2022',
        logo: '/bloomtech.png',
        description: `Scribble Stadium is an interactive learning platform tailored for grade school children, designed to enhance reading comprehension,` +
        `artistic, writing, and critical thinking skills through engaging weekly competitions. Participants engage with a serialized novel,` +
        `create related art and fanfiction, and compete in a bracket-style tournament. This platform not only fosters educational growth` +
        `but also promotes teamwork and critical thinking through a unique voting system.`,
        role: ` As a developer on the Scribble Stadium project, I significantly enhanced the user interface and interactivity of the platform, focusing on the navigation and informational aspects to improve user engagement and comprehension.

        - Enhanced Navigation: Implemented a user-friendly modal using Ant Design components, providing clear instructions for navigating the read, draw, and write steps.` +
        `This feature was crucial for ensuring that young users and their parents could effectively use the platform without confusion.

        - Interactive Design Enhancements: Redesigned the user interface for Scribble Stadium by introducing a dropdown` +
        `bubble-themed info modal with a lightbulb icon trigger, enhancing aesthetic appeal and intuitiveness. The new design also features interactive` +
        `enhancements such as a hand pointer cursor on hover, making the platform more engaging for young users.

        - Interactive Design Enhancements: Redesigned the user interface for Scribble Stadium by introducing a dropdown` +
        `bubble-themed info modal with a lightbulb icon trigger, enhancing aesthetic appeal and intuitiveness. The new design also features interactive` +
        `enhancements such as a hand pointer cursor on hover, making the platform more engaging for young users.

        - Collaboration and Code Quality: In collaboration with team members, I focused on` +
        `maintaining high code quality by participating in code reviews, managing version control, and cleaning up unused code.` +
        `This collective effort helped enhance the platform’s functionality and maintainability.`
      }
  ];

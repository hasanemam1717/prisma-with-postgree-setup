import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient()

const main = async () => {
    // create data in prisma
    // const result = await prisma.post.create({
    //     data: {
    //         title: "This is the prisma project title2",
    //         content: "This is content2",
    //         author: "Hasan Emam"
    //     }
    // })
    // console.log(result);

    // create many data into db
    const createMany = await prisma.post.createMany({
        data: [
            {
                "title": "Building REST APIs with Node.js #1",
                "content": "Common mistakes and how to avoid them.",
                "author": "Aisha Khan"
            },
            {
                "title": "Exploring TypeScript with React #2",
                "content": "Common mistakes and how to avoid them.",
                "author": "Hasan Emam"
            },
            {
                "title": "Understanding JavaScript Closures #3",
                "content": "Learn the fundamentals and advanced techniques.",
                "author": "Priya Sharma"
            },
            {
                "title": "Mastering React Hooks #4",
                "content": "How to scale your app efficiently.",
                "author": "Omar Hussein"
            },
            {
                "title": "Mastering React Hooks #5",
                "content": "Tips and tricks from industry experience.",
                "author": "Lena Petrova"
            },
            {
                "title": "Asynchronous JavaScript: Callbacks, Promises, and Async/Await #6",
                "content": "A deep dive into modern async patterns.",
                "author": "David Chen"
            },
            {
                "title": "Demystifying Webpack: A Practical Guide #7",
                "content": "Optimizing your build process.",
                "author": "Sophia Lee"
            },
            {
                "title": "State Management in React: Redux vs. Context API #8",
                "content": "Choosing the right tool for your project.",
                "author": "Marcus Bell"
            },
            {
                "title": "Unit Testing React Components with Jest and React Testing Library #9",
                "content": "Ensuring code quality and reliability.",
                "author": "Chloe Nguyen"
            },
            {
                "title": "Server-Side Rendering with Next.js #10",
                "content": "Boosting performance and SEO.",
                "author": "Javier Garcia"
            },
            {
                "title": "CSS-in-JS: Styled Components vs. Emotion #11",
                "content": "Styling your React applications efficiently.",
                "author": "Isabelle Dubois"
            },
            {
                "title": "Performance Optimization in React Applications #12",
                "content": "Techniques for faster user experiences.",
                "author": "Kenji Tanaka"
            },
            {
                "title": "Securing REST APIs with JWT and OAuth #13",
                "content": "Best practices for API security.",
                "author": "Maria Sanchez"
            },
            {
                "title": "Deploying Node.js Applications to AWS EC2 #14",
                "content": "A step-by-step deployment guide.",
                "author": "Liam White"
            },
            {
                "title": "Building Real-time Applications with WebSockets and Node.js #15",
                "content": "Creating interactive user experiences.",
                "author": "Olivia Brown"
            },
            {
                "title": "Introduction to GraphQL with Node.js and Apollo Server #16",
                "content": "A flexible alternative to REST.",
                "author": "Noah Green"
            },
            {
                "title": "Error Handling in Node.js Applications #17",
                "content": "Robust strategies for production systems.",
                "author": "Emma Davis"
            },
            {
                "title": "Understanding the JavaScript Event Loop #18",
                "content": "How JavaScript handles concurrency.",
                "author": "James Wilson"
            },
            {
                "title": "Creating Custom React Hooks #19",
                "content": "Reusable logic for your components.",
                "author": "Ava Taylor"
            },
            {
                "title": "Migrating from JavaScript to TypeScript: A Practical Guide #20",
                "content": "Adopting static typing in your projects.",
                "author": "Lucas Martinez"
            },
            {
                "title": "Advanced Redux Patterns: Sagas and Thunks #21",
                "content": "Managing complex side effects.",
                "author": "Mia Anderson"
            },
            {
                "title": "Setting up a CI/CD Pipeline for Node.js Applications #22",
                "content": "Automating your deployment workflow.",
                "author": "Ethan Thomas"
            },
            {
                "title": "Debugging Node.js Applications Effectively #23",
                "content": "Tools and techniques for quick issue resolution.",
                "author": "Charlotte Jackson"
            },
            {
                "title": "Working with Databases in Node.js: MongoDB vs. PostgreSQL #24",
                "content": "Choosing the right database for your needs.",
                "author": "Alexander White"
            },
            {
                "title": "Building Scalable Microservices with Node.js #25",
                "content": "Designing distributed systems.",
                "author": "Amelia Harris"
            },
            {
                "title": "Understanding the React Reconciliation Process #26",
                "content": "How React updates the DOM efficiently.",
                "author": "Benjamin Clark"
            },
            {
                "title": "Forms in React: Controlled vs. Uncontrolled Components #27",
                "content": "Managing user input in your applications.",
                "author": "Harper Lewis"
            },
            {
                "title": "Integrating Third-Party APIs in Node.js #28",
                "content": "Seamless data exchange with external services.",
                "author": "Daniel Rodriguez"
            },
            {
                "title": "Optimizing Node.js Performance with Clustering and PM2 #29",
                "content": "Maximizing server throughput.",
                "author": "Evelyn King"
            },
            {
                "title": "Exploring the Node.js Streams API #30",
                "content": "Efficient handling of large data sets.",
                "author": "Matthew Baker"
            },
            {
                "title": "Advanced TypeScript Features for React Development #31",
                "content": "Generics, utility types, and more.",
                "author": "Sofia Hall"
            },
            {
                "title": "Building Accessible React Applications #32",
                "content": "Ensuring inclusivity for all users.",
                "author": "Joseph Scott"
            },
            {
                "title": "Authentication and Authorization in React Applications #33",
                "content": "Implementing secure user flows.",
                "author": "Abigail Green"
            },
            {
                "title": "Working with Environment Variables in Node.js #34",
                "content": "Managing configuration for different environments.",
                "author": "David Adams"
            },
            {
                "title": "Testing Node.js Applications with Mocha and Chai #35",
                "content": "Writing effective server-side tests.",
                "author": "Elizabeth Nelson"
            },
            {
                "title": "Containerizing Node.js Applications with Docker #36",
                "content": "Streamlining deployment and development.",
                "author": "Samuel Carter"
            },
            {
                "title": "Introduction to Serverless Computing with AWS Lambda and Node.js #37",
                "content": "Building scalable and cost-effective backends.",
                "author": "Grace Mitchell"
            },
            {
                "title": "Understanding the JavaScript Module System #38",
                "content": "CommonJS vs. ES Modules.",
                "author": "Andrew Roberts"
            },
            {
                "title": "Building Progressive Web Apps (PWAs) with React #39",
                "content": "Delivering app-like experiences on the web.",
                "author": "Victoria Cook"
            },
            {
                "title": "Handling Forms in Node.js with Express and Multer #40",
                "content": "Processing file uploads and form data.",
                "author": "Christopher Hill"
            },
            {
                "title": "Advanced Routing in React with React Router DOM #41",
                "content": "Nested routes, protected routes, and more.",
                "author": "Chloe Turner"
            },
            {
                "title": "Securing React Applications: XSS, CSRF, and more #42",
                "content": "Protecting your frontend from common attacks.",
                "author": "Dylan Cooper"
            },
            {
                "title": "Working with Dates and Times in JavaScript: Moment.js vs. Date-fns #43",
                "content": "Simplifying date manipulation.",
                "author": "Ella Reed"
            },
            {
                "title": "Optimizing Images for Web Performance #44",
                "content": "Techniques for faster loading times.",
                "author": "Gabriel Moore"
            },
            {
                "title": "Building a Chat Application with Socket.IO and React #45",
                "content": "Real-time communication in action.",
                "author": "Hannah Evans"
            },
            {
                "title": "Understanding Browser Storage: Local Storage, Session Storage, and Cookies #46",
                "content": "Client-side data persistence.",
                "author": "Isaac Murphy"
            },
            {
                "title": "Introduction to Web Accessibility (A11y) #47",
                "content": "Making your web applications usable by everyone.",
                "author": "Lily Cox"
            },
            {
                "title": "Using Web Workers for Performance Optimization #48",
                "content": "Offloading heavy computations from the main thread.",
                "author": "Nathan Ward"
            },
            {
                "title": "Implementing Dark Mode in React Applications #49",
                "content": "Enhancing user experience with theme switching.",
                "author": "Zoe Bailey"
            },
            {
                "title": "Building a Portfolio Website with React and Tailwind CSS #50",
                "content": "Showcasing your skills with modern tools.",
                "author": "Oliver Barnes"
            },
            {
                "title": "Understanding the JavaScript Prototype Chain #51",
                "content": "How inheritance works in JavaScript.",
                "author": "Penelope Ross"
            },
            {
                "title": "Advanced CSS Techniques for React Developers #52",
                "content": "Grid, Flexbox, and responsive design.",
                "author": "Sebastian Griffin"
            },
            {
                "title": "Building Offline-First Applications with Service Workers #53",
                "content": "Reliable experiences even without network access.",
                "author": "Stella Hayes"
            },
            {
                "title": "Introduction to Design Patterns in JavaScript #54",
                "content": "Reusable solutions to common problems.",
                "author": "Theodore Price"
            },
            {
                "title": "Working with SVG in React Applications #55",
                "content": "Scalable vector graphics for the web.",
                "author": "Violet Cole"
            },
            {
                "title": "Building a Blog with Next.js and Markdown #56",
                "content": "A static site generator approach.",
                "author": "William Perry"
            },
            {
                "title": "Deep Dive into React Context API #57",
                "content": "Global state management without Redux.",
                "author": "Xavier Long"
            },
            {
                "title": "Optimizing Frontend Performance with Code Splitting #58",
                "content": "Reducing initial load times.",
                "author": "Yara Brooks"
            },
            {
                "title": "Understanding the Browser Rendering Process #59",
                "content": "How your code becomes pixels on the screen.",
                "author": "Zachary Foster"
            },
            {
                "title": "Creating Animations in React with React Spring #60",
                "content": "Building fluid and interactive UIs.",
                "author": "Alice Rivera"
            },
            {
                "title": "Working with Node.js and Redis for Caching #61",
                "content": "Improving application responsiveness.",
                "author": "Bryan Stewart"
            },
            {
                "title": "Automating Tasks with npm Scripts #62",
                "content": "Streamlining your development workflow.",
                "author": "Catherine Morris"
            },
            {
                "title": "Building a To-Do Application with React and Firebase #63",
                "content": "A full-stack, real-time example.",
                "author": "Declan Phillips"
            },
            {
                "title": "Exploring the JavaScript Proxy Object #64",
                "content": "Meta-programming in JavaScript.",
                "author": "Eleanor Howard"
            },
            {
                "title": "Implementing Search Functionality in React Applications #65",
                "content": "Efficient filtering and data display.",
                "author": "Finley Kelly"
            },
            {
                "title": "Working with Web Components and React #66",
                "content": "Interoperability between different frameworks.",
                "author": "Georgia Price"
            },
            {
                "title": "Introduction to WebSockets: Building Real-time Features #67",
                "content": "Beyond simple HTTP requests.",
                "author": "Henry Collins"
            },
            {
                "title": "Debugging React Applications with React DevTools #68",
                "content": "Essential tools for efficient debugging.",
                "author": "Ivy Bell"
            },
            {
                "title": "Understanding the JavaScript Strict Mode #69",
                "content": "Writing safer and more robust code.",
                "author": "Jasper Scott"
            },
            {
                "title": "Building a File Upload Service with Node.js and Cloudinary #70",
                "content": "Handling and storing user-uploaded files.",
                "author": "Kayla Green"
            },
            {
                "title": "Optimizing React Applications for SEO #71",
                "content": "Making your content discoverable by search engines.",
                "author": "Leo Adams"
            },
            {
                "title": "Working with the Fetch API for Network Requests #72",
                "content": "Modern JavaScript for consuming APIs.",
                "author": "Maya Nelson"
            },
            {
                "title": "Introduction to Storybook for React Component Development #73",
                "content": "Building isolated UI components.",
                "author": "Nolan Carter"
            },
            {
                "title": "Managing Configuration in Node.js Applications #74",
                "content": "Best practices for flexible deployments.",
                "author": "Olivia Roberts"
            },
            {
                "title": "Building a Custom Webpack Configuration for React #75",
                "content": "Taking full control of your build.",
                "author": "Peter Mitchell"
            },
            {
                "title": "Understanding React's `useEffect` Hook Dependencies #76",
                "content": "Avoiding common pitfalls and infinite loops.",
                "author": "Quinn Cook"
            },
            {
                "title": "Introduction to Functional Programming in JavaScript #77",
                "content": "Writing cleaner and more predictable code.",
                "author": "Rachel Hill"
            },
            {
                "title": "Building a Chrome Extension with React #78",
                "content": "Extending browser functionality.",
                "author": "Samara Turner"
            },
            {
                "title": "Working with Node.js and Kubernetes #79",
                "content": "Orchestrating containerized applications.",
                "author": "Thomas Cooper"
            },
            {
                "title": "Implementing Internationalization (i18n) in React #80",
                "content": "Making your application multi-lingual.",
                "author": "Uma Reed"
            },
            {
                "title": "Deep Dive into Node.js Event Emitters #81",
                "content": "Building custom event-driven architectures.",
                "author": "Victor Moore"
            },
            {
                "title": "Building a Real-time Dashboard with React and D3.js #82",
                "content": "Data visualization for dynamic insights.",
                "author": "Willow Evans"
            },
            {
                "title": "Understanding the JavaScript `this` Keyword #83",
                "content": "Context in functions and methods.",
                "author": "Xena Murphy"
            },
            {
                "title": "Implementing Server-Sent Events (SSE) in Node.js #84",
                "content": "One-way real-time communication.",
                "author": "Yusuf Cox"
            },
            {
                "title": "Creating a Command-Line Interface (CLI) with Node.js #85",
                "content": "Building powerful development tools.",
                "author": "Zara Ward"
            },
            {
                "title": "Optimizing Frontend Assets with Gzip and Brotli #86",
                "content": "Reducing file sizes for faster delivery.",
                "author": "Aaron Bailey"
            },
            {
                "title": "Building a Shopping Cart with React and Context API #87",
                "content": "Practical state management for e-commerce.",
                "author": "Bianca Barnes"
            },
            {
                "title": "Introduction to WebAssembly with Node.js and React #88",
                "content": "High-performance code on the web.",
                "author": "Caleb Ross"
            },
            {
                "title": "Working with React Portals for Modals and Overlays #89",
                "content": "Rendering components outside the DOM hierarchy.",
                "author": "Delilah Griffin"
            },
            {
                "title": "Understanding the JavaScript `new` Keyword and Constructors #90",
                "content": "Object creation in JavaScript.",
                "author": "Evan Hayes"
            },
            {
                "title": "Building a GraphQL Client with React and Apollo Client #91",
                "content": "Consuming GraphQL APIs efficiently.",
                "author": "Fiona Price"
            },
            {
                "title": "Deep Dive into Node.js Child Processes #92",
                "content": "Executing external commands and programs.",
                "author": "Gavin Cole"
            },
            {
                "title": "Implementing Undo/Redo Functionality in React #93",
                "content": "Managing state changes in complex applications.",
                "author": "Holly Perry"
            },
            {
                "title": "Working with HTTP/2 in Node.js Applications #94",
                "content": "Boosting web performance with a modern protocol.",
                "author": "Isaac Long"
            },
            {
                "title": "Building a Drag-and-Drop Interface with React Dnd #95",
                "content": "Creating interactive user experiences.",
                "author": "Jasmine Brooks"
            },
            {
                "title": "Understanding the JavaScript `call`, `apply`, and `bind` Methods #96",
                "content": "Controlling function context.",
                "author": "Kyle Foster"
            },
            {
                "title": "Implementing Web Push Notifications in Node.js #97",
                "content": "Engaging users with real-time updates.",
                "author": "Luna Rivera"
            },
            {
                "title": "Optimizing React Performance with Memoization #98",
                "content": "Preventing unnecessary re-renders.",
                "author": "Miles Stewart"
            },
            {
                "title": "Building a Simple E-commerce Backend with Node.js and Stripe #99",
                "content": "Processing payments securely.",
                "author": "Nora Morris"
            },
            {
                "title": "Exploring the Node.js File System Module #100",
                "content": "Interacting with files and directories.",
                "author": "Oscar Phillips"
            }
        ]
    })
    console.log(createMany);

}

main()
import me from '../../images/Profile/me2.jpg';

import FGE_Home from '../../images/FeelGoodEats/home.png';
import FGE_Results from '../../images/FeelGoodEats/results.png';
import FGE_Restaurant from '../../images/FeelGoodEats/restaurant.png';
import FGE_Reviews2 from '../../images/FeelGoodEats/reviews2.png';

import Bookify_Playlist from '../../images/Bookify/playlist.png';
import Bookify_Login from '../../images/Bookify/login.png';
import Bookify_Book from '../../images/Bookify/book.png';

import Wiki_Page from '../../images/Wiki/page.png';
import Wiki_Edit from '../../images/Wiki/edit.png';
import Wiki_NewPage from '../../images/Wiki/new-page.png';
import Wiki_Home from '../../images/Wiki/home.png';




import { useState } from 'react';

function HomePage() {
  const [currentIndices, setCurrentIndices] = useState({
    project1: 0,
    project2: 0,
    project3: 0
  });

  const projectImages = {
    project1: [FGE_Home, FGE_Results, FGE_Restaurant, FGE_Reviews2],
    project2: [Bookify_Playlist, Bookify_Login, Bookify_Book],
    project3: [Wiki_Page, Wiki_Edit, Wiki_NewPage, Wiki_Home]
  };

  const nextImage = (project) => {
    setCurrentIndices(prev => ({
      ...prev,
      [project]: prev[project] === projectImages[project].length - 1 ? 0 : prev[project] + 1
    }));
  };

  const previousImage = (project) => {
    setCurrentIndices(prev => ({
      ...prev,
      [project]: prev[project] === 0 ? projectImages[project].length - 1 : prev[project] - 1
    }));
  };

  const ProjectCard = ({ project, title, date, description, technologies, linkType, linkUrl }) => (
    <div className="bg-gray-200 p-4 rounded-md max-w-[498px]">
      <div className="flex justify-between">
        <h4 className="text-xl font-bold">{title}</h4>
        <h2 className="text-sm text-gray-600 pl-2">{date}</h2>
      </div>
      <div className="relative overflow-hidden">
        <div className="hidden">
          {projectImages[project].map((src, index) => (
            <img key={index} src={src} alt="preload" />
          ))}
        </div>
        
        <img 
          src={projectImages[project][currentIndices[project]]} 
          alt={`${title} slide ${currentIndices[project] + 1}`} 
          className="w-full h-auto transition-opacity duration-300 ease-in-out"
          style={{ 
            height: '300px',
            objectFit: 'contain',
            backgroundColor: '#f3f4f6'
          }}
        />
        <button 
          onClick={() => previousImage(project)}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-200"
        >
          ←
        </button>
        <button 
          onClick={() => nextImage(project)}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-200"
        >
          →
        </button>
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {projectImages[project].map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                currentIndices[project] === index ? 'bg-white scale-125' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
      <h1 className="mb-2">{technologies}</h1>
      <p className="text-sm text-gray-600 mb-2">{description}</p>
      <button 
        onClick={() => window.open(linkUrl, '_blank')}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
      >
        {linkType === 'github' ? 'View GitHub' : 'View Site'}
      </button>
    </div>
  );

  return (
    <div className="flex flex-col items-center p-5">
      <div className="flex flex-col md:flex-row items-center md:gap-10 gap-5 justify-center">
        <h1 className="text-4xl">Hi, I'm Nathan Van Zandt</h1>
        <img 
          src={me} 
          alt="me" 
          className="w-28 h-28 rounded-full object-cover" 
          style={{ objectPosition: '50% 0%' }}
        />
      </div>
      <h3 className="text-3xl mt-10 mb-5">About</h3>
      <p className="text-sm text-gray-600 w-full max-w-screen-md sm:w-11/12 ">
        I graduated from Boston University with a major in Health Science and a minor in Computer Science, and I'm now pursuing my passion for software development. 
        I have a strong background in front-end development, with a focus on React.js and Tailwind CSS. I am also proficient 
        in back-end development, with experience in Node.js and Express.js. I am a quick learner and have a knack for problem-solving. 
        I am a team player and always looking to improve my skills.
        <br></br>
        <br></br>
        You can contact me at <a href="mailto:nvanzandt02@gmail.com" className="text-blue-500">nvanzandt02@gmail.com</a>
      </p>
      <h3 className="text-3xl mt-10 mb-5">Projects</h3>
      <div className="grid grid-cols-1 gap-7 w-full sm:w-11/12 place-items-center mb-10 max-w-screen-lg [@media(min-width:850px)]:grid-cols-2">
        <ProjectCard 
          project="project1"
          title="FeelGoodEats.net"
          date="Feb 2024 - Dec 2024"
          technologies="React.js Express.js Firebase Tailwind CSS"
          description="A restaurant review platform focused on dietary preferences, helping users find and review restaurants that accommodate their specific needs. Features include real-time updates, interactive search filters, image uploads, and Google Maps integration for restaurant discovery. Built with React and Firebase, offering Google OAuth authentication and comprehensive admin capabilities."
          linkType="site"
          linkUrl="https://feelgoodeats.net"
        />
        <ProjectCard 
          project="project2"
          title="Bookify"
          date="Sep 2023 - Dec 2023"
          technologies="React.js Flask OpenAI API Spotify Web API"
          description="A full-stack web application that creates AI-powered Spotify playlists based on book selections. Users can authenticate with Spotify, select books, and receive personalized playlists that match the book's themes and mood. Built with a Flask backend handling OAuth 2.0 and OpenAI integration, paired with a responsive React frontend featuring real-time playlist generation and a user review system."
          linkType="github"
          linkUrl="https://github.com/nvanzandt/CS411-Bookify"
        />
        <ProjectCard 
          project="project3"
          title="Wiki"
          date="July 2023 - Sep 2023"
          technologies="Django HTML CSS"
          description="A Wikipedia-style web application that allows users to create and edit encyclopedia entries using Markdown. Features include real-time Markdown preview, partial-match search functionality, and random page discovery. Built with Django and styled with Bootstrap for a responsive, user-friendly interface."
          linkType="github"
          linkUrl="https://github.com/nvanzandt/CS50W-Wiki"
        />
      </div>
      <h1 className="text-sm mt-10">© Nathan Van Zandt 2024</h1>
    </div>
  );
}

export default HomePage;
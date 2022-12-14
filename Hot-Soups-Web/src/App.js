// import About from './Components/About';
// import Contributors from './Components/Contributors';
// import Header from './Components/Header';
import { FaLinkedin } from 'react-icons/fa'
// import { FaDiscord } from 'react-icons/fa'
import './Styles/Global.css';


function App() {
  return (
    <>
      <section className='text'>
        <h1> Website under construction; will be coming soon! </h1>
        <h2> Check us on out on our social media page </h2>
        <div className='socials'>
          <a href='https://www.linkedin.com/company/hotsoup-info/' target='_blank' rel='noreferrer'><FaLinkedin/></a>
        </div>
      </section>

    </>
  );
}

export default App;
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const socialMedia = [
  {
    icon: 'fa-facebook',
    link: 'https://www.facebook.com',
  },
  {
    icon: 'fa-instagram',
    link: 'https://www.instagram.com',
  },
  {
    icon: 'fa-twitter',
    link: 'https://www.twitter.com',
  },
  {
    icon: 'fa-linkedin',
    link: 'https://www.linkedin.com',
  },
  {
    icon: 'fa-github',
    link: 'https://www.github.com',
  },
]

function App() {
  return (
    <div className='card'>
      <div className='top'>
        <Header />
        <Identity />
      </div>
      <div className='bottom'>
        <Biodata />
        <Highlight />
      </div>
    </div>
  );
}

function SocialButton({ icon, link }) {
  return (
    <button onClick={() => window.open(link, '_blank')}>
      <i className={`fab ${icon}`}></i>
    </button>
  );
}

function Header() {
  const middleIndex = Math.floor(socialMedia.length / 2);
  const socialLeft = socialMedia.slice(0, middleIndex);
  const socialRight = socialMedia.slice(middleIndex);

  return (
    <>
      <div className='social-buttons'>
        {socialLeft.map((item, index) => (
          <SocialButton key={index} icon={item.icon} link={item.link} />
        ))}
      </div>
      <div className='social-buttons right'>
      {socialRight.map((item, index) => (
          <SocialButton key={index} icon={item.icon} link={item.link} />
        ))}
      </div>
    </>
  );
}

function Identity() {
  return (
    <div className='text'>
      <div className='name-wrapper'>
        <div className='name'>Black Cat</div>
      </div>
      <div className='title'>Meow Engineer</div>
    </div>
  );
}

function Biodata() {
  return (
    <div className='desc'>
      <p>
        My name is <b>Black Cat</b> and I am an Engineer.
      </p>
      <p>
        To say that I love software is an understatement, i spend every waking
        hour building something FUN & watching Tech Podcasts or attending
        Meetups & Conferences.
      </p>
    </div>
  );
}

function Badge({ text }) {
  return (
    <button>
      <div className='height'>{text}</div>
    </button>
  );
}

function Highlight() {
  return (
    <div className='buttons'>
      <Badge text='PhD' />
      <Badge text='Mountaineer' />
      <Badge text='3D Geek' />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;

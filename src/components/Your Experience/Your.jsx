import React, { useState } from 'react';
import rest from './kallavesi-lake-3840x2160-9645.jpg';
import './Your.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import './Review'
import Reviews from './Review';
import Navbar from '../NavBar/Navbar';

const Your = (props) => {
  const [answersVisible, setAnswersVisible] = useState({
    prices: false,
    msNaive: false,
    location: false
  });

  const toggleAnswer = (answerKey) => {
    setAnswersVisible(prevState => ({
      ...prevState,
      [answerKey]: !prevState[answerKey]
    }));
  };

  return (
    <div style={{ backgroundColor: 'black', color: 'white', overflow: 'hidden' }}>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Armata&family=Azeret+Mono:ital,wght@0,100..900;1,100..900&family=La+Belle+Aurore&display=swap');
      </style>
      <img src={rest} className="site-image" alt="Restaurant background" />
      <Navbar/>
      <div className='text-container'>
        <p>
          Sitting at a table overlooking the sea at Ms. Naive's, the atmosphere is nothing short of enchanting. The waves gently lap against the shore, their rhythmic dance providing a soothing soundtrack to the evening. The sky transitions from a brilliant blue to shades of pink and orange as the sun begins to set, casting a warm, golden glow over everything.
        </p>
        <p>
          Laughter fills the air, light and carefree, as you share stories and jokes with friends. The joy is palpable, a sense of pure contentment settling over the group. The ambiance at Ms. Naive perfectly complements this feeling, with its elegant yet cozy decor that makes you feel right at home.
        </p>
        <p>
          Just as the conversation reaches a delightful crescendo, the first dishes arrive. The aroma alone is enough to make your mouth water. The laughter continues, now interspersed with appreciative murmurs and exclamations about the incredible food. Each course is a revelation, from the starters to the main dishes, culminating in desserts that are almost too beautiful to eat.
        </p>
        <p>
          The sound of the sea mingles with the soft music playing in the background, creating an idyllic setting.
        </p>
        <p>
          At Ms. Naive, it’s not just a meal; it’s an experience. One that fills you with warmth, joy, and a deep appreciation for good company and exceptional cuisine. The memory of this evening will linger long after the last dish is cleared and the final goodbyes are said.
        </p>
      </div>
      <h1>FAQ</h1>
      <div className='faq'>
        <div className='faq-item yellow-box'>
          <div className='question'>
            <strong>What are the prices?</strong>
            <button onClick={() => toggleAnswer('prices')} className="toggle-button">

              <FontAwesomeIcon icon={answersVisible.prices ? faAngleUp : faAngleDown} />
            </button>
          </div>
          <div className={`answer ${answersVisible.prices ? 'visible' : ''}`}>
            If you need to ask, you can't afford this place.
          </div>
        </div>
        <div className='faq-item yellow-box'>
          <div className='question'>
            <strong>Who is Ms. Naive?</strong>
            <button onClick={() => toggleAnswer('msNaive')} className="toggle-button">
            <FontAwesomeIcon icon={answersVisible.location ? faAngleUp : faAngleDown} />

            </button>
          </div>
          <div className={`answer ${answersVisible.msNaive ? 'visible' : ''}`}>
            Ms. Naive is a fictional character who wishes to join DevComm's core team.
          </div>
        </div>
        <div className='faq-item yellow-box'>
          <div className='question'>
            <strong>Where is this restaurant?</strong>
            <button onClick={() => toggleAnswer('location')} className="toggle-button">

              <FontAwesomeIcon icon={answersVisible.location ? faAngleUp : faAngleDown} />
            </button>
          </div>
          <div className={`answer ${answersVisible.location ? 'visible' : ''}`}>
            I don't know.
          </div>
        </div>
      </div>
      <br/>
      <h1>Reviews</h1>
      <Reviews name={props.name}/>
    </div>
  );
}

export default Your;

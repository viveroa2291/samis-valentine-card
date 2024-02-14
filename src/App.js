import React, { useState } from 'react';
import './App.css';
import me from './images/me.jpeg';
function App() {
  const [envelopeState, setEnvelopeState] = useState({
    isInnerOpen: false,
    isOuterOpen: false,
    isHeartBtnHidden: false,
    isCloseBtnVisible: false,
    isMessage1Hidden: false,
    isMessage2Visible: false,
    isImageVisible: false,
  });
  const openEnvelope = () => {
      setEnvelopeState((prevState) => ({
        ...prevState, 
        isInnerOpen: true,
        isOuterOpen: true,
        isHeartBtnHidden: true,
        isCloseBtnVisible: true,
        isMessage1Hidden: true,
        isMessage2Visible: true,
        isImageVisible: true,
        selectedImage: me
      }))
    }
  const closeEnvelope = () => {
    setEnvelopeState((prevState) => ({ 
      ...prevState, 
      isInnerOpen: false,
      isOuterOpen: false,
      isHeartBtnHidden: false,
      isCloseBtnVisible: false,
      isMessage1Hidden: false,
      isMessage2Visible: false,
      isImageVisible: false
  }));
}
  return (
    <div className="App">
      <article>
        <div className="envelope-container">
          <p className={`message message-1 ${envelopeState.isMessage1Hidden ? 'hide' : ''}`}>
            <strong>Happy Valentine's Day!</strong>
            <br/><br/>Click on the heart seal to open the envelope.
          </p>
          <span className={`note ${envelopeState.isMessage2Visible ? 'show' : 'hide'} `}>
            <span className='picture'>
              <img className={`imageChosen ${envelopeState.isImageVisible ? 'show' : ''}`} src={envelopeState.selectedImage} alt=''/>
            </span>
            <p className={`message message-2 ${envelopeState.isMessage2Visible ? 'show' : ''}`}>Hello Sami,</p>
            <p className={`valentines-message message-2 ${envelopeState.isMessage2Visible ? 'show' : ''}`}>You're not just a friend, you're family. Through thick and thin, we've laughed and faced challenges together. From school to life. Your support means the world to me. You're the light in my darkest moments. Let's turn a new page and make happier memories. Happy Valentine's Day! 💌</p>
            <p className={`sincerely message-2 ${envelopeState.isMessage2Visible ? 'show' : ''}`}>Love, Adan</p>
          </span>
          <button className={`heart-btn otherButton ${envelopeState.isHeartBtnHidden ? 'hide' : 'show'}`} onClick={openEnvelope}>&#10084;</button>
          <button className={`close-btn otherButton ${envelopeState.isCloseBtnVisible ? 'show' : ''}`} onClick={closeEnvelope}>close envelope</button>
          <div className="envelope-flap">
            <svg className="inner">
              <polygon className={`inner-polygon ${envelopeState.isInnerOpen ? 'inner-open' : ''}`} points="5,0 345,0 175,145"></polygon>
            </svg>
            <svg className="outer" id="outer">
              <polygon className={`outer-polygon ${envelopeState.isOuterOpen ? 'outer-open' : ''}`} points="5,150 345,150 175,0"></polygon>
            </svg>
          </div>
          <div className="envelope-base"></div>
        </div>
      </article>
    </div>
  );
}

export default App;


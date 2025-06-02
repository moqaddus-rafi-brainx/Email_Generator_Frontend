import React, { useState, useEffect } from 'react';

function InputArea({ prompt, setPrompt, loading, sendPrompt, resetChat,tone,setTone,type,setType }) {
  const [listening, setListening] = useState(false);
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
    
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      alert('Your browser does not support Speech Recognition.');
      return;
    }

    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recog = new SpeechRecognition();

    recog.continuous = true;
    recog.interimResults = true;
    recog.lang = 'en-US';

    recog.onresult = (event) => {
      let interim = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          setPrompt((prev) => prev + transcript + ' ');
        } else {
          interim += transcript;
        }
      }
    };

    recog.onend = () => {
      setListening(false);
    };

    setRecognition(recog);
  }, []);

  const handleMicClick = () => {
    if (listening) {
      recognition.stop();
    } else {
      setListening(true);
      recognition.start();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendPrompt();
    }
  };

  return (
    <div className='inputArea'>
        <div className='row'>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="General">General</option>
          <option value="Job Application">Job Application</option>
          <option value="Follow-up">Follow-up</option>
          <option value="Meeting Request">Meeting Request</option>
          <option value="Thank You">Thank You</option>
        </select>

        <select value={tone} onChange={(e) => setTone(e.target.value)}>
          <option value="Formal">Formal</option>
          <option value="Casual">Casual</option>
          <option value="Polite">Polite</option>
          <option value="Direct">Direct</option>
        </select>
      </div>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Type or use voice..."
        rows={2}
      />
      <button
        onClick={handleMicClick}
        className='micButton' 
      >
        {listening ? '⏹️' : '🎤'}
      </button>
      <button
        onClick={sendPrompt}
        disabled={loading || !prompt.trim()}
        className='button'
      >
        Send
      </button>
      <button onClick={resetChat} className='resetBtn'>
        Reset
      </button>
    </div>
  );
}


export default InputArea;

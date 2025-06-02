import React, { useState,useEffect } from 'react';
import InputArea from './InputArea';
import { useNavigate } from 'react-router-dom';
import { sendEmail,resetPrompts } from '../apis/EmailApis';

function Home() {
    const navigate=useNavigate();
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [generatedEmail, setGeneratedEmail] = useState('');
  const [tone, setTone] = useState('Formal');
  const [type, setType] = useState('General');

  const sendPrompt = async () => {
    if (!prompt.trim()) return;

    const userMsg = { role: 'user', content: prompt };
    const typingMsg = { role: 'assistant', content: 'Typing...' };
    setPrompt('');
    setLoading(true);

    try {
      const res = await sendEmail(prompt,tone,type)

      const aiReply = { role: 'assistant', content: res.data.email };
      try {
        
        let emailHistory=JSON.parse(localStorage.getItem('emailHistory') || '[]');
        emailHistory.push(res.data.email);
        localStorage.setItem('emailHistory',JSON.stringify(emailHistory))
        setGeneratedEmail(res.data.email);
        
      } catch (error) {
        console.error(error.message)
      }
      
    } catch (err) {
        console.error(err)

      setGeneratedEmail('');
    } finally {
      setLoading(false);
    }
  };

  const resetChat = async () => {
    await resetPrompts();
    
    setPrompt('');
    setGeneratedEmail('');
  };

  const handleHistory= async()=>{
    navigate('/history')
  }

  return (
    <div className='container'>
      <h2>Smart Email Generator</h2>
      <button className='history-btn' onClick={handleHistory}>Email History</button>
      <InputArea
        prompt={prompt}
        setPrompt={setPrompt}
        loading={loading}
        sendPrompt={sendPrompt}
        resetChat={resetChat}
        tone={tone}
        setTone={setTone}
        type={type}
        setType={setType}

      />
     {loading && <h3>Thinking.....</h3>}
      {generatedEmail && !loading && (
        <div className='emailBox'>
          <h3>Generated Email:</h3>
          <pre className='emailText'>{generatedEmail}</pre>
        </div>
      )}
    </div>
  );
}

export default Home;

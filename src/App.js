import React from 'react';
import "./App.css";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from 'react-use-clipboard';
import { useState } from 'react';

const App = () => {

  const[textToCopy,setTexttoCopy]=useState()
  const [isCopied,setCopied]=useClipboard(textToCopy);
  const startListening=()=>SpeechRecognition.startListening({ continuous: true, language:'en-In' })
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return null
  }

  return (
    <>
    <div className='container'>
      <h2>Speech to Text Converter</h2>
      <br/>
      <p>A React Hook that converts the speech from the microphone to text and make it available to your React Components.</p>

      <div className='main-content' onClick={()=> setTexttoCopy(transcript)}>
        {transcript}
      </div>

      <div className='btn-style'>
        <button onClick={setCopied}>
          {isCopied? "Copied!" : "Copy to Clipboard"};
        </button>
        <button onClick={startListening}>Start Listening</button>
        <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
      </div>
    </div>
    </>
  )
}

export default App
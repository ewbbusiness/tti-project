import logo from './logo.svg';
import './App.css';
import water from './water.png';
import soil from './soil.png';

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import BackIcon from '@material-ui/icons/KeyboardBackspace';

function App() {
  const [showTextInput, setShowTextInput] = useState(true);
  const [text, setText] = useState('');
  const [selectedText, setSelectedText] = useState('');
  const [hoverOnText, setHoverOnText] = useState(false);

  function saveTextInput() {
    if (text != '') {
      setShowTextInput(!showTextInput)
    }
    else {
      alert('Please enter a non-empty set of instructions.')
    }
  }

  function handleClick(word) {
    console.log(word);
  }

  function showImage() {
    setHoverOnText(true);
  }

  function hideImage() {
    setHoverOnText(false);
  }

  const HoverableText = (text, handleClick) => {
    var words = String(text.text).split(' ');
    words.forEach((d, i) => {
      words[i] = d
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
        .replace(/\s{2,}/g, ' ');
    });
    var words = words.filter((d) => {
      return d !== '';
    });
    return words.map((w) => (
      <span
        id='span'
        onMouseEnter={() => setSelectedText(w.toLowerCase())}
        onMouseOver={showImage}
        onMouseLeave={hideImage}
        onClick={() => alert(w)}
      >
        {w}
      </span>
    ));
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <h3>Engineers Without Borders – Cornell University</h3>
        <h4>A Text-to-Image Project by Daisy Shu and Sean Yu</h4>
        <h4>April 2021</h4>
      </header>
      <div className='App-body'>
        {showTextInput ? (
          <div id='textfield'>
            <TextField
              className='textfield'
              placeholder='Input your instructions here!'
              multiline
              rows={25}
              rowsMax={1000}
              fullWidth={true}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        ) : (
          <div id='textSpans'>
            <HoverableText text={text} handleClick={handleClick} />
            <img src={selectedText == 'water' ? water : soil} style={{display: hoverOnText ? "inline" : "none"}} />
          </div>
          )}
        <div id='savebutton'>
          <Button
            className='savebutton'
            variant='contained'
            color='primary'
            size='medium'
            startIcon={showTextInput ? <SaveIcon /> : <BackIcon />}
            onClick={saveTextInput}
          >
            {showTextInput ? 'Process' : 'Back'}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;

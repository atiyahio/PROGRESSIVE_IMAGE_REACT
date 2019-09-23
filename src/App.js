import React from 'react';
import ProgressiveImage from './ProgressiveImage';

import './App.css';

function App() {
  return (
    <div className="App">
      <ProgressiveImage
        className={'cover'}
        alt={'woman'}
        overlaySrc={
          'https://images.pexels.com/photos/2156416/pexels-photo-2156416.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=5'
        }
        src={
          'https://images.pexels.com/photos/2156416/pexels-photo-2156416.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
        }
      />
    </div>
  );
}

export default App;

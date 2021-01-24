import React from 'react';
// Import Pages
import Welcome from './pages/Welcome';
//import Input from './pages/Input';
// Import Global Style
import GlobalStyle from './components/GlobalStyle';

function App() {
  return (
    <div className="App">
      <Welcome />
      <GlobalStyle />
    </div>
  );
}

export default App;

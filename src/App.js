import React from 'react';
import './App.css';
import PanemComponent from './components/PanemComponent'; // Импортируем компонент формы

function App() {
  return (
      <div className="App">
        <h1>Panem</h1>
        <PanemComponent /> {/* Вставляем компонент формы */}
      </div>
  );
}

export default App;

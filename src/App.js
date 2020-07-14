import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Baitaplayout from './Components/BaiTapLayout/Baitaplayout';
import BT2layout from './Components/BTlayout2/BT2layout';
import Databinding from './Components/DataBase/Databinding';

// App như hàm main: mọi component đều hiển thị qua App
function App() {
  return (
    <div className="App">
     
      <Databinding></Databinding>
    </div>
  )
}

export default App;

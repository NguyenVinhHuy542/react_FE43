import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Baitaplayout from './Components/BaiTapLayout/Baitaplayout';
import BT2layout from './Components/BTlayout2/BT2layout';
import Databinding from './Components/DataBase/Databinding';
import Evenbinding from './EvenBinding/Evenbinding';
import RenderwithStale from './RenderWithStale/renderwithStale';
import Baitapchonxe from './RenderWithStale/Baitapchonxe';
import RenderMap from './RenderMap/RenderMap';
import BT3DanLayout from './Components/BT3DanLayout/BT3DanLayout';
import BTGlassLayout from './Components/BaiTapGlass/BTGlassLayout';

// App như hàm main: mọi component đều hiển thị qua App
function App() {
  return (
    <div className="App">
      <BTGlassLayout></BTGlassLayout>
      {/* <BT3DanLayout></BT3DanLayout> */}
      
    </div>
  )
}

export default App;

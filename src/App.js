import Card from './components/Card';
import React, { useState, useEffect } from 'react';
// import data from './data.json'; //data ile hata veriyor!!!!!!!!!!!!!!!!!

function App() {
const [itemList, setItemList] = useState([]);

useEffect(() =>{
fetch('https://www.breakingbadapi.com/api/characters')
  .then(response => response.json())
  .then((data) =>setItemList(data))
},[]
);


  return (
    <div className="App">
      <header className="header">
        <img src="https://www.logolynx.com/images/logolynx/55/55a537ca9549600cfd1d0b274b3bc61.png" alt="breaking Bad logo" />

      </header>
      <div className="cards">
        {itemList.map((item) => (

          <Card key={item.char_id} item={item} />))}
      </div>

    </div>
  );
}

export default App;

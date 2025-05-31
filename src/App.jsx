import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Card from './components/Card.jsx'; 
import axios from 'axios';

const App = () => {
  // const users = [
  //   {
  //     "user": "Alice Johnson",
  //     "age": 28,
  //     "city": "New York",
  //     "image": "https://randomuser.me/api/portraits/women/44.jpg"
  //   },
  //   {
  //     "user": "Michael Smith",
  //     "age": 35,
  //     "city": "Los Angeles",
  //     "image": "https://randomuser.me/api/portraits/men/65.jpg"
  //   },
  //   {
  //     "user": "Sophia Lee",
  //     "age": 22,
  //     "city": "Chicago",
  //     "image": "https://randomuser.me/api/portraits/women/68.jpg"
  //   },
  //   {
  //     "user": "Daniel Kim",
  //     "age": 31,
  //     "city": "Seattle",
  //     "image": "https://randomuser.me/api/portraits/men/50.jpg"
  //   },
  //   {
  //     "user": "Emily Davis",
  //     "age": 26,
  //     "city": "Austin",
  //     "image": "https://randomuser.me/api/portraits/women/12.jpg"
  //   }
  // ]

  const [data, setData] = useState([])

  const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list')
    // console.log(response)
    // const data = response.data
    // console.log(data)
    setData(response.data)
    console.log(data)
  }

  

  return (
    <>
      {/* <Navbar />
      <div className='p-10 flex'>
        {users.map(function(ele, idx) {
          return <Card key={idx} user={ele.user} age={ele.age} city={ele.city} />
        })}
      </div> */}

      <div className="p-5">
        <button onClick={getData} className="bg-green-500 text-white px-5 py-2 rounded hover:bg-green-600 text-base">
          Get Data
        </button>
        <div className="mt-4 p-4 rounded shadow">
          {data.map(function(ele, idx) {
            return <div key={idx} className='flex bg-amber-200 text-black items-center justify-between p-6 rounded-2xl mb-3'>
              <img className='h-40' src={ele.download_url} />
              <h1>{ele.author}</h1>
            </div>
          })}
        </div>
      </div>


     </>
  );
};

export default App;

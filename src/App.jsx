import React from 'react';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Card from './components/Card.jsx'; 

const App = () => {
  const users = [
    {
      "user": "Alice Johnson",
      "age": 28,
      "city": "New York",
      "image": "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      "user": "Michael Smith",
      "age": 35,
      "city": "Los Angeles",
      "image": "https://randomuser.me/api/portraits/men/65.jpg"
    },
    {
      "user": "Sophia Lee",
      "age": 22,
      "city": "Chicago",
      "image": "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      "user": "Daniel Kim",
      "age": 31,
      "city": "Seattle",
      "image": "https://randomuser.me/api/portraits/men/50.jpg"
    },
    {
      "user": "Emily Davis",
      "age": 26,
      "city": "Austin",
      "image": "https://randomuser.me/api/portraits/women/12.jpg"
    }
  ]

  return (
    <>
      <Navbar />
      <div className='p-10 flex'>
        {users.map(function(ele, idx) {
          return <Card key={idx} user={ele.user} age={ele.age} city={ele.city} />
        })}
      </div>
     </>
  );
};

export default App;

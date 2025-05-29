import React from 'react'
import Header from './components/Header.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Footer />
    </>
  )
}

export default App








// ----
// Form Handling in React

// import React from 'react'

// const App = () => {

//   const [username, setUsername] = React.useState('')

//   const submitHandler = (e) => {
//     e.preventDefault()
//     console.log("Username submitted:", username)
//     setUsername('') 
//   }

//   return (
//     <div>
//       <form onSubmit={(e) => {
//         submitHandler(e)
//       }}>
//         <input 
//         onChange={(e) => {
//           setUsername(e.target.value)
//         }}
//         type="text"
//         value={username}
//         placeholder="Enter name here" className="border p-2 rounded mb-4" />
//         <button type="submit" className="bg-emerald-500 text-white p-2 rounded">Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App
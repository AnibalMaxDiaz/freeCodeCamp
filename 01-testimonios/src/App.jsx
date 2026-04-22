import './App.css'
import Testimony from "./components/Testimony.jsx";
function App() {
    return (
    <>
      <div className="main-container" >
        <h1>Here's what our students are saying about freeCodeCamp:</h1>
        <Testimony 
          
          name="Shawn"
          country="Singapore"
          // image="Shawn"
          position="Software Engineer"
          enterprice="Amazon"
          text="It's scary to change careers. I only gained the confidence that I could program by working through the hundreds of hours of free lessons in freeCodeCamp. Within a year I had a six-figure job as a software engineer. freeCodeCamp changed my life."
        />
      </div>
    </>
  )
}

export default App

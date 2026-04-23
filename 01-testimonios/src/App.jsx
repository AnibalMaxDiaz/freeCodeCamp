import './App.css'
import Testimony from "./components/Testimony.jsx";
function App() {
    return (
    <>
      <div className="App">
        <div className="main-container" >
          <h1>Here's what our students are saying about freeCodeCamp:</h1>
          <Testimony           
            name="Shawn"
            country="Singapore"
            position="Software Engineer"
            enterprice="Amazon"
            text="It's scary to change careers. I only gained the confidence that I could program by working through the hundreds of hours of free lessons in freeCodeCamp. Within a year I had a six-figure job as a software engineer. freeCodeCamp changed my life."
          />

          <Testimony
            name="Sarah"
            country="United States"
            position="Web Developer"
            enterprice="Google"
            text="freeCodeCamp provided me with the skills and confidence I needed to transition into web development. The community support and hands-on projects were invaluable."
          />

          <Testimony
            name="Emma"
            country="Canada"
            position="Data Scientist"
            enterprice="Microsoft"
            text="The comprehensive curriculum at freeCodeCamp gave me a solid foundation in data science. I'm now working as a data scientist at Microsoft."
          />

        </div>
      </div>
    </>
  )
}

export default App

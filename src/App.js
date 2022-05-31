import { useState, useEffect } from "react"

function App() {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }
  useEffect(() => {
    //side effect
    window.addEventListener('resize', handleResize)
    //cleanup 
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div>
      {windowWidth}
    </div>
  );
}

export default App;


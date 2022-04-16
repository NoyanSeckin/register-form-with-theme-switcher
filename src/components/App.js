import {useState} from "react";
import ThemeContext from "../contexts/ThemeContext.";
import Signup from "./Signup";
import Intro from "./Intro";
function App() {
  const [theme, setTheme] = useState("");
  return (
    <div className="container">
      <ThemeContext.Provider value={theme}>
        <Intro></Intro>
        <Signup setTheme={setTheme}></Signup>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;

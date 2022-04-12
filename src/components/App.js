import { useContext, useState } from "react";
import ThemeContext from "../contexts/ThemeContext.";
import Signup from "./Signup";
import Intro from "./Intro";
function App() {
  const Theme = useContext(ThemeContext);
  const [theme, setTheme] = useState("");

  console.log(Theme);
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

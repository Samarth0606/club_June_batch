import Buttons from "./components/Buttons";
import Counter from "./components/Counter";
import Orange from "./components/Orange";
import Person from "./components/Person";
import PlayAround from "./components/PlayAround";
import Profile from "./components/Profile";

function App(){
  return(
    <div>
      <h1>Hello from App</h1>
      {/* <Profile name="Samarth" age={14} isMale={true} />
      <Profile name="Khushbu" age={15} isMale={false} /> */}

      {/* <Person naam="Maverick" /> */}

      {/* <Buttons /> */}
      {/* <Counter /> */}
      {/* <Orange /> */}
      <PlayAround />
    </div>
  )
}

export default App;
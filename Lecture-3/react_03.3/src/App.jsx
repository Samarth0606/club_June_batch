import Person from "./components/Person";
import Shadi from "./components/Shadi";

function App(){
  return(
    <div>
      <h1>Welcome to App</h1>
      <Shadi  name="maverick" age={3} />
      <Person  naam="Sam" umar={99} favColor="blue" isMale={true} />
      <Person  naam="Sampada" umar={21} favColor="black" isMale={false} />
      <Person  naam="Ashreek" umar={25} favColor="green" isMale={true} />
      <Person  naam="Aditya" umar={24} favColor="pink" isMale={true} />
    </div>
  )
}

export default App;
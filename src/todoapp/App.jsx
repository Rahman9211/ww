import { useState } from "react";
import Input from "./Input";
import List from "./List";

function App() {
  const [todos, setTodos] = useState(["breakfast", "lunch", "dinner", "todo"]); // Corrected "Const" to "const"
  console.log(todos);

  return (
    <div className="container mt-5">
      <Input todos={todos} setTodos={setTodos} /> 
      <List todos={todos} /> 
    </div>
  );
}

export default App;

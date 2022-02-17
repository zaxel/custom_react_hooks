import useRequest from "./hooks/useRequest";
import axios from 'axios';

function App() {
  const [todos, loading, error] = useRequest(fetchTodos)

  function fetchTodos(){
    return axios.get(`https://jsonplaceholder.typicode.com/todos`)
    
  }

  if(loading){
    return <h1>Loading</h1>
  }
  if(error){
    return <h1 style={{color: 'red'}}>Some error has occurred</h1>
  }
  

  return (
    <div>
      {todos && todos.map(todo=>
                <div className='todo' key={todo.id}>{todo.id} - {todo.title}</div>
            )}
    </div>
  );
}

export default App;

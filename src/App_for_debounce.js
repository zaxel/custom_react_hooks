import {useState} from "react";
import Hover from "./components/Hover";
import List from "./components/List";
import useDebounce from "./hooks/useDebounce";
import useInput from "./hooks/useInput";

function App() {
  const [value, setValue] = useState('');
  const debouncedSearch = useDebounce(search, 800)

  function search(query){
    fetch(`https://jsonplaceholder.typicode.com/todos?query=${query}`)
    .then(response => response.json())
    .then(json => console.log(json))
  }
  const onChange = (e) => {
    setValue(e.target.value);
    debouncedSearch(value);
  }

  return (
    <div>
      <input type={'text'} value={value} onChange={onChange}/>
    </div>
  );
}

export default App;

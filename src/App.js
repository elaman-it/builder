import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "./redux/actions/todo";

const App = () => {
  const items = useSelector(state => state);
  const dispatch = useDispatch();

  function onRemoveCallback(id) {
    dispatch(remove(id));
  }

  function onAddCallback(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    dispatch(add(data.get('new')));
  }

  const results = Object.keys(items).map(id => (
    <li key={id}>
      <span>{items[id]}</span>
      <button onClick={() => onRemoveCallback(id)}>Remove</button>
    </li>
  ));

  return (
    <div className="App">
      <form onSubmit={onAddCallback}>
        <input type="text" name="new" required />
        <button>Add</button>
      </form>
      <ul>
        {results}
      </ul>
    </div>
  );
}

export default App;

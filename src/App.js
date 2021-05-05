import { useDispatch, useSelector } from "react-redux";
import { delayedAdd, delayedRemove, toggle } from "./redux/actions/todo";

const App = () => {
  const items = useSelector(state => state);
  const dispatch = useDispatch();

  function onRemoveCallback(id) {
    dispatch(delayedRemove(id));
  }

  function onToggleCallback(id) {
    dispatch(toggle(id));
  }

  function onAddCallback(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    dispatch(delayedAdd(data.get('new')));
  }

  const results = Object.keys(items).map(id => (
    <li key={id}>
      <span onClick={() => onToggleCallback(id)} style={{
        cursor: "pointer",
        textDecoration: items[id].done ? "line-through" : "none"
      }}>{items[id].text}</span>
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

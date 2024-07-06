/* todos = [
   {
    title: "go to gym",
    description: "go to gym",
   } 
   ]
*/
export function Todos({todos}) {

  
  return (
    <div>
      {todos && todos.map(todo => (
        <div key={todo.id}>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
          <button>
          {todo.completed == true ? "Completed" : "Mark as Complete"}
          </button>
        </div>
      ))}
    </div>
  );
}

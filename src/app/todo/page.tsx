const TodoDetail = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/comments`);
  const data = await res.json();

  type Todos = {
    id: string;
    name: string;
  };

  return (
    <div>
      <h1>todo page</h1>

      <br />
      {data.map((todo: Todos) => (
        <div key={todo.id}>
          <h1>{todo.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default TodoDetail;

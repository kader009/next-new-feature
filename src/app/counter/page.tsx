const CounterPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <br />
        <h1>0</h1>
        <div className="space-x-3">
          <button className="bg-black text-white p-2 rounded">increment</button>
          <button className="bg-black text-white p-2 rounded">decrement</button>
        </div>
      </div>
    </div>
  );
};

export default CounterPage;

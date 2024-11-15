const UserData = async() => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  console.log(data);
  return <div>UserData</div>;
};

export default UserData;

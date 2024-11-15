export interface Root {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

const UserData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  console.log(data);
  return (
    <div>
      {data.map((user: Root) => (
        <div key={user.id}>
          <h4>{user.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default UserData;

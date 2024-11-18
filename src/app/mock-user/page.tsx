import { revalidatePath } from 'next/cache';

interface Mock {
  id: string;
  name: string;
}

const MockUser = async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/users'
  );
  const data = await response.json();

  async function addUser(formData: FormData) {
    'use server';
    const name = formData.get('name');
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/users`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      }
    );
    const newUser = await res.json();
    revalidatePath('/mock-user');
    console.log(newUser);
  }

  return (
    <>
      <div className="text-center">
        <form action={addUser}>
          <input
            className="w-36 bg-slate-500 rounded outline-none p-2"
            type="text"
            required
            name="name"
          />
          <button className="bg-black text-white rounded p-1">Add user</button>
        </form>
      </div>
      <br />
      <br />
      <div className="space-y-3 w-1/2 mx-auto">
        {data?.map((user: Mock) => (
          <div key={user.id}>
            <h4 className="bg-black text-white p-1 rounded">{user.name}</h4>
          </div>
        ))}
      </div>
    </>
  );
};

export default MockUser;

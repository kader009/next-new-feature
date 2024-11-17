import { use } from 'react';

const fetchName = async () => {
  const response = await fetch(
    `https://6736d36baafa2ef22231a2ab.mockapi.io/name`
  );

  return response.json();
};

interface NAme {
  name: string;
  id: string;
}

const About = () => {
  const Names = use(fetchName());
  return (
    <div>
      <h1 className="text-center font-semibold">About page</h1>
      <br />
      <br />
      <div className="flex justify-center items-center gap-4 flex-wrap">
        {Names.map((name: NAme) => (
          <div key={name.id}>
            <span className="bg-blue-600 rounded text-white p-2">
              {name.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;

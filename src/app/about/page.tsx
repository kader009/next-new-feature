import { use } from 'react';

const fetchName = async () => {
  const response = await fetch(
    `https://6736d36baafa2ef22231a2ab.mockapi.io/name`
  );
  const data = response.json();
  return data;
};

const About = () => {
  return (
    <div>
      <h1 className="text-center font-semibold">About page</h1>
      <br />
      <br />
    </div>
  );
};

export default About;

import { Metadata } from "next";

export const metadata:Metadata = {
  title: 'Attitude',
  description: 'this is home page for nextjs 15',
};

const Home = () => {
  return (
    <div className="flex justify-center items-center min-h-screen font-semibold">
      home page
    </div>
  );
};

export default Home;

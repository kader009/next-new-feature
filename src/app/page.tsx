import UserData from '@/components/user/page';

const Home = () => {
  console.log('change');
  return (
    <div className="text-blue-500 font-semibold flex justify-center items-center min-h-screen">
      <UserData />
    </div>
  );
};

export default Home;

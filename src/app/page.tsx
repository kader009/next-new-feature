import UserData from '@/components/user/page';

const Home = () => {
  console.log('change');
  return (
    <div className="flex justify-center items-center min-h-screen">
      <UserData />
    </div>
  );
};

export default Home;

import Image from 'next/image';

const About = () => {
  return (
    <div>
      About
      <Image
        src={
          'https://images.pexels.com/photos/28965902/pexels-photo-28965902/free-photo-of-gardener-in-autumn-sunflower-garden.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }
        alt="cowgirl"
        width={1000}
        height={60000}
      />
    </div>
  );
};

export default About;

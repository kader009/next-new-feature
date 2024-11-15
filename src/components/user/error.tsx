import { useEffect } from 'react';

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>something went wrong here...</div>
    </div>
  );
}

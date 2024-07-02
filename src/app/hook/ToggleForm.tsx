import { useState } from 'react';

const useToggleForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn((prevIsSignIn) => !prevIsSignIn);
  };

  return [isSignIn, toggleForm];
};

export default useToggleForm;

import React, { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";
const SocialLog = () => {

  const {signInWithGoogle} = useContext(AuthContext)

const handleGoogleSignIn = () =>{
  signInWithGoogle()
  .then(result => {
    Navigate('/');
  })
  .catch(error =>{
    const errorMessage = error.message;
  })
}

  return (
    <div>
      <h2 className="font-semibold mb-3">Login with</h2>
      <div className="*:w-full space-y-2">
        <button onClick={handleGoogleSignIn} className="btn">
          <FaGoogle></FaGoogle> Login with Google{" "}
        </button>
        <button className="btn">
          <FaGithub></FaGithub> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLog;

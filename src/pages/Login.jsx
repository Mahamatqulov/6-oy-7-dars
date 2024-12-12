import { useSignup } from "../hooks/useSignup";
import { FcGoogle } from "react-icons/fc";
import { BsTwitterX } from "react-icons/bs";

function Login() {
  const { signUpWithGoogle } = useSignup();
  return (
    <div className="bg-[url('../public/img/rasm2.jpeg')] h-screen w-screen bg-contain bg-center bg-repeat">
      <div className="h-screen grid place-items-center ">
        <div className="flex items-center gap-5  relative top-[150px]">
          <button
            onClick={signUpWithGoogle}
            className="btn btn-info bg-inherit text-cyan-400 text-2xl"
          >
            <FcGoogle /> Google
          </button>
          <button
            onClick={signUpWithGoogle}
            className="btn btn-info  bg-inherit text-cyan-200 text-2xl"
          >
            <BsTwitterX /> .com
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;

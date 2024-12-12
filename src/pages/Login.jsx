import { useSignup } from "../hooks/useSignup";

function Login() {
  const { signUpWithGoogle } = useSignup();
  return (
    <div className="h-screen grid place-items-center">
      <button onClick={signUpWithGoogle} className="btn btn-primary">
        Google
      </button>
    </div>
  );
}

export default Login;

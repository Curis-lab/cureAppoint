import { useState } from "react";
import fetcher from "../api/fetcher";
import useForm from "../hooks/useForm";

function Login() {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const defaultFormData = { name: "", email: "", password: "" };

  const { formData, handleChange, handleSubmit } = useForm<{
    name: string;
    email: string;
    password: string;
  }>(defaultFormData);

  const submit = async () => {
    const response = await fetcher(
      "http://localhost:3000/api/patient/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    console.log("this is response", response);
  };
  return (
    <form
      className="min-h-[80vh] flex items-center"
      onSubmit={(e) => handleSubmit(e, submit)}
    >
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border">
        <p className="text-2xl font-semibold">
          {isLogin ? "Create Account" : "Login"}
        </p>
        <p>Please {isLogin ? "sign up" : "login in"} to book appointment</p>
        {isLogin && (
          <div className="w-full">
            <p>Full Name</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => handleChange(e)}
            />
          </div>
        )}
        <div className="w-full">
          <p>Email</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="password"
            name="password"
            value={formData.password}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button
          className="bg-primary text-white w-full py-2 rounded-md text-base"
          type="submit"
        >
          {isLogin ? "Create Account" : "Log In"}
        </button>
        {isLogin ? (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setIsLogin(false)}
              className="text-primary underline cursor-pointer"
            >
              Login here
            </span>
          </p>
        ) : (
          <p>
            Create an new account?{" "}
            <span
              onClick={() => setIsLogin(true)}
              className="text-primary underline cursor-pointer"
            >
              click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
}

export default Login;

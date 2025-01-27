import { useState } from "react";

function Login() {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const defaultFormData = { name: "", email: "", password: "" };
  const [formData, setFormData] = useState({ ...defaultFormData });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch('http://localhost:3000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

    console.log(formData);
    setFormData({...defaultFormData});
  };
  return (
    <form className="min-h-[80vh] flex items-center" onSubmit={handleSubmit}>
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
              onChange={e=>handleChange(e, 'name')}
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
            onChange={e=>handleChange(e, 'email')}
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="password"
            name="password"
            value={formData.password}
            onChange={e=>handleChange(e, 'password')}
          />
        </div>
        <button className="bg-primary text-white w-full py-2 rounded-md text-base" type="submit">
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

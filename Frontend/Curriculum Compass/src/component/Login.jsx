const Login = () => {
  return (
    <section className="w-full flex justify-center items-center mt-64 font-sans">
      <div className="w-[450px] border-2 rounded-xl border-black p-8 h-[500px] space-y-6">
        <h1 className=" text-2xl font-sans text-blue-500 font-bold">
          Sign in to your account
        </h1>
        <div className="space-x-2" id="selectUser">
          <label for="users" className="font-semibold">
            Login As:
          </label>

          <select
            name="users"
            id="users"
            className="border-2 rounded-lg  border-grey-100 p-3 "
          >
            <option value="admin">Administrator</option>
            <option value="curriculum-developer">Curriculum Developer</option>
            <option value="educator">Educator</option>
          </select>
        </div>
        <form className="font-semibold">
          <div className="mt-3  ">
            <label for="username" className="block">
              Username
            </label>
            <input
              type="text"
              name="username"
              className="border -2 w-full p-3 rounded-xl"
              required="true"
            />
          </div>
          <div className="mt-4">
            <label for="password" className="block">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="border -2 w-full p-3 rounded-lg"
              required="true"
            />
          </div>
          <div className="flex justify-between mt-4">
            {" "}
            <div className=" flex items-baseline">
              <input
                id="remember"
                type="checkbox"
                className="scale-150 mr-1"
              ></input>
              <label for="remember">Remember Me</label>
            </div>
            <a href="#" className="underline text-blue-500 font-light">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className=" rounded-lg w-full bg-blue-500 p-3 mt-8 text-white"
          >
            Sign In
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;

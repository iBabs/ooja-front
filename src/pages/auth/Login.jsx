import { Link,useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import axios from "axios";
import { AppContext } from "../../contexts/AppContext";
import { toast } from "react-toastify";

const Login = () => {
  const [see, setSee] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { dispatch} = useContext(AppContext)
  const history = useNavigate()

  const handleSubmit = async (e) => {



    e.preventDefault();
    try {
      setLoading(true);
       const res = await axios.post("http://localhost:7788/api/v1/auth/login", {email, password});
        console.log(res.data)

        toast.success("Login successful 👍")
        dispatch({type:"LOGIN", payload:res.data})
        localStorage.setItem("user", JSON.stringify(res.data))
        history("/")


    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message || error.response.data.error || "An error occured")
    }finally{
      setLoading(false)
    }


  };

  return (
    <>
      <div className="bg-slate-200 min-h-screen flex flex-col items-center justify-center px-1 md:px-10">
        <form 
        onSubmit={handleSubmit}
        className="bg-white p-5 rounded-md shadow-sm w-full  text-center md:w-1/2">
          <h1 className="font-montserrat text-3xl font-bold text-primary text-center">
            Login
          </h1>
          <div className="w-full flex justify-center">
            <p className="text-sm mt-3 w-4/5 ">
              Welcome to <span className="oj font-bold font-iceberg">Ooja</span>
              . Here you will get your proper market experience. Please enter
              your login details and enjoy the experience
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between m-2 sm:items-end">
            <label
              htmlFor="email"
              className="font-montserrat text-sm sm:text-xl text-primary mr-1"
            >
              Email:
            </label>
            <input
            onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="w-full p-2 outline-none border-b-2 border-b-secondary transition-all duration-200 ease-linear focus:border-b-tertiary"
            />
          </div>
          <div className="flex m-2 flex-col sm:flex-row justify-between sm:items-end">
            <label
              htmlFor="email"
              className="font-montserrat text-sm sm:text-xl text-primary mr-1"
            >
              Password:
            </label>
            <input
            onChange={(e) => setPassword(e.target.value)}
              type={see?"text":"password"}
              className="w-full p-2 outline-none border-b-2 border-b-secondary transition-all duration-200 ease-linear focus:border-b-tertiary"
            />
            <button
              type="button"
              onClick={() => setSee(!see)}
              className="text-secondary text-xl"
            >
              {see ? <FaRegEye /> : <FaRegEyeSlash />}
            </button>
          </div>
          <button
            disabled={loading}
            type="submit"
            className={`w-full bg-primary text-white p-2 rounded-md font-montserrat text-xl mt-5 duration-200 ease-linear hover:bg-secondary ${loading&&"cursor-not-allowed"}`}
          >
            {loading ? "Loading..." : "Login"}
          </button>

          <p className="text-sm mt-3">
            No account?{" "}
            <Link className="text-tertiary underline" to="/signup">
              Sign Up
            </Link>{" "}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;

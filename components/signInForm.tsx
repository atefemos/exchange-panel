import CustomInput from "./customeInput";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { authAction } from "@/store/reduxStore";
import { useDispatch } from "react-redux";

const SignInForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  // submit function
  const handleSubmit = async (e: any) => {
    // Stop the form from submitting and refreshing the page.
    e.preventDefault();
    // Get data from the form.
    const data = {
      username: "eve.holt@reqres.in",
      password: "cityslicka",
    };
    let res = await axios({
      method: "post",
      url: "https://reqres.in/api/login",
      headers: { "content-type": "application/json" },
      data: JSON.stringify(data),
    });
    if (res) {
      dispatch(authAction.auth(res.data.token));
      toast.success("Logged In Successfully!");
      router.push("/");
      return res;
    } else {
      toast.error("Server Error!");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-100 py-4 px-8 w-[420px] rounded-md m-auto mt-24"
    >
      <h3 className="text-center text-gray-900 font-extrabold mb-8 underline-offset-8 underline">
        Sign In
      </h3>
      <CustomInput name={"username"} />
      <CustomInput name={"password"} />
      <button
        type="submit"
        className="block m-auto bg-blue-700 text-white w-full text-[14px] py-2 rounded-md mt-4 hover:bg-blue-900"
      >
        sign in
      </button>
    </form>
  );
};

export default SignInForm;

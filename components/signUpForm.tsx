import CustomInput from "./customeInput";
import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const SignUpForm = () => {
  const router = useRouter();
  // submit function
  const handleSubmit = async (e: any) => {
    // Stop the form from submitting and refreshing the page.
    e.preventDefault();
    // Get data from the form.
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
      email: e.target.email.value,
      country: e.target.country.value,
      city: e.target.city.value,
    };
    let res = await axios({
      method: "post",
      url: "https://reqres.in/api/users",
      headers: { "content-type": "application/json" },
      data: JSON.stringify(data),
    });
    if (res) {
      toast.success("Registered Successfully!");
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
        Sign Up
      </h3>
      <CustomInput name={"username"} />
      <CustomInput name={"email"} />
      <CustomInput name={"password"} />
      <CustomInput name={"country"} />
      <CustomInput name={"city"} />
      <button
        type="submit"
        className="block m-auto bg-blue-700 text-white w-full text-[14px] py-2 rounded-md mt-4 hover:bg-blue-900"
      >
        sign up
      </button>
    </form>
  );
};

export default SignUpForm;

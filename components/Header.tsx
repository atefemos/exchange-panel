import Image from "next/image";
import logo from "../public/vercel.svg";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Header = () => {
  // Hooks
  const router = useRouter();

  // redux store
  const { token } = useSelector((state: any) => state.auth);

  // function for route user to log in page if hasn't token
  const handleUser = () => {
    if (!token) {
      router.push("/signIn");
    }
  };

  // render components
  return (
    <div className="flex justify-between items-center h-[54px] w-[100vw] py-2 bg-slate-50 px-8 shadow-lg sticky ">
      <p
        className="shadow-md px-4 py-2 rounded-md max-w-max hover:shadow-inner hover:shadow-slate-300"
        onClick={handleUser}
      >
        {!token ? "Login" : "Account"}
      </p>
      <Image src={logo} alt={"logo page"} className="w-[80px]" />
    </div>
  );
};

export default Header;

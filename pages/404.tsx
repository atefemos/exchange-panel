import { useRouter } from "next/router";
import gif from "../public/404.gif";
import Image from "next/image";

const NotFound = () => {
  // Hooks
  const router = useRouter();

  // route to home page function
  const navigateToHome = () => {
    router.push("/");
  };

  // render component
  return (
    <div className="h-[100vh] w-[100vw] flex flex-col justify-center items-center mt-20">
      <Image src={gif} alt="not found" />
      <button
        className="block m-auto bg-blue-700 text-white px-10 py-4 rounded-md mt-10 hover:bg-blue-900"
        onClick={navigateToHome}
      >
        Home
      </button>
    </div>
  );
};

export default NotFound;

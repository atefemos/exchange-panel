import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import login from "../public/login.svg";
import Panel from "@/components/panel";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // hooks
  const router = useRouter();

  // redux store
  const { token } = useSelector((state: any) => state.auth);

  // route to log in page functions
  const handleSignIn = () => {
    router.push("/signIn");
  };

  return (
    <main className={` min-h-screen  ${inter.className}`}>
      <Header />
      {token ? (
        <Panel />
      ) : (
        <div className="m-auto bg-slate-800 text-white w-[500px] mt-12 p-4 shadow-lg rounded-[4px]">
          To access the content of the panel, Sign in!
          <div className="flex justify-end mt-4">
            <div
              className="flex bg-slate-200 text-[14px] text-black shadow-md px-2 py-1 rounded-[4px] hover:bg-white"
              onClick={handleSignIn}
            >
              Sign In
              <Image src={login} alt="login" className="w-[20px] ml-2" />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

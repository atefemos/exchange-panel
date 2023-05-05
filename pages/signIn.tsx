import SignInForm from "@/components/signInForm";
import { useRouter } from "next/router";

const SignIn = () => {
  // Hooks
  const router = useRouter();
  // route to sign up page function
  const handleSignUp = () => {
    router.push("/signUp");
  };

  // render component
  return (
    <main className="min-h-screen">
      <SignInForm />
      <div className="flex justify-center mt-4">
        If you don't have account,{"  "}
        <span
          className="font-extrabold underline underline-offset-8 hover:text-blue-800 cursor-pointer"
          onClick={handleSignUp}
        >
          CLICK!
        </span>
      </div>
    </main>
  );
};

export default SignIn;

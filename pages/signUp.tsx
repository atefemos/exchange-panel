import SignUpForm from "@/components/signUpForm";
import { useRouter } from "next/router";

const SignUp = () => {
  // Hooks
  const router = useRouter();

  // route to sign in page function
  const handleSignIn = () => {
    router.push("/signIn");
  };
  return (
    <main className="min-h-screen">
      <SignUpForm />
      <div className="flex justify-center mt-4">
        If you have account,{"  "}
        <span
          className="font-extrabold underline underline-offset-8 hover:text-blue-800 cursor-pointer"
          onClick={handleSignIn}
        >
          CLICK!
        </span>
      </div>
    </main>
  );
};

export default SignUp;

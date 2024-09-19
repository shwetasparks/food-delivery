import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

const Login = () => {
  return (
    <div className=" flex  items-center justify center h-screen w-screen min-h-screen border border-red-400">
      <form className="md:w-full p:8 max-w-md rounded-lg md:border border-gray-200 mx-4">
        <div className="mb-4 font-bold text-xl">
          <h1 className="font ">Zayka Express</h1>
        </div>

        <div className="relative"> 
          <Input type="email" placeholder=" Email" className="pl-8 text-gray-400 focus-visible:ring-0" />
          <Mail className="absolute inset-y-2 left-2 text-gray-500 pointer-events-none"/>
        </div>

        <Input type="password" placeholder="enter your password" />
      </form>
    </div>
  );
};

export default Login;

"use client"
import Button from "@/components/Button";
import Input from "@/components/Input";
import Label from "@/components/Label";
import Title from "@/components/Title";
import { useRouter } from 'next/navigation';

function Login() {
  const router = useRouter();

  const handleRedirection = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/dashboard/report'); // Navega a la página "/about"
  };

  return (
    <div className="flex h-[calc(100vh-200px)] justify-center items-center">
      <form onSubmit={handleRedirection} className="flex flex-col gap-5 min-w-[300px] h-auto outline outline-2 -outline-offset-1 outline-gray-300 border-2 rounded-xl px-5 py-8">
        <Title>Login</Title>
        <div className="flex flex-col gap-2">
          <Label>User </Label>
          <Input type="text" required/>
          <Label>Password </Label>
          <Input type="password" required/>
        </div>
        <div className="flex justify-between items-center">
          <div></div> {/*Div elemet used to move the button to right side*/}
            <Button type="submit">Login</Button>
        </div>
      </form>
    </div>
  )
}

export default Login
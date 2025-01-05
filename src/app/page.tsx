"use client";
import Button from "@/components/Button";
import Form from "@/components/Form";
import Input from "@/components/Input";
import Label from "@/components/Label";
import Title from "@/components/Title";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();

  const handleRedirection = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    router.push("/dashboard/home"); 
  };

  return (
    <div className="flex h-[calc(100vh-200px)] justify-center items-center">
      <Form onSubmit={handleRedirection} className="flex flex-col gap-5 min-w-[300px] h-auto px-5 py-8">
        <Title>Login</Title>
        <div className="flex flex-col gap-2">
          <Label>User</Label>
          <Input type="text" required />
          <Label>Password</Label>
          <Input type="password" required />
        </div>
        <div className="flex justify-between items-center">
          <div></div> 
          <Button type="submit">Login</Button>
        </div>
      </Form>
    </div>
  );
}

export default Login;

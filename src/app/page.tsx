"use client";

import Button from "@/components/Button";
import Form from "@/components/Form";
import Input from "@/components/Input";
import Label from "@/components/Label";
import Title from "@/components/Title";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/AppContext";

function Login() {
  const router = useRouter();
  const { user, setUser } = useAppContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.target.value);
  };

  const handleRedirection = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Usuario ingresado:", user); // Verifica en consola que el usuario se captura correctamente
    router.push("/dashboard/home");
  };

  return (
    <div className="flex h-[calc(100vh-200px)] justify-center items-center">
      <Form onSubmit={handleRedirection} className="flex flex-col gap-5 min-w-[300px] h-auto px-5 py-8">
        <Title>Login</Title>
        <div className="flex flex-col gap-2">
          <Label>User</Label>
          <Input
            type="text"
            name="user"
            value={user} 
            onChange={handleChange}
            required
          />
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            required
          />
        </div>
        <div className="flex justify-between items-center">
          <div></div>
          <Button type="submit">Login</Button>
        </div>
        <p className="w-[300px] text-center font-bold text-red-700">
          This is a demo application, to access enter any username and any password
        </p>
      </Form>
    </div>
  );
}

export default Login;
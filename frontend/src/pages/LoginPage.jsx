import { Button, Card, Input, Label, Container } from "../components/ui/";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

function LoginPage() {
 const { register, handleSubmit, formState: {
 errors
 } } = useForm();
 const { signin, errors: loginErrors } = useAuth();
 const navigate = useNavigate();


 const onSubmit = handleSubmit(async(data) => {
   const user = await signin(data);

   if (user) navigate("/tasks");
   });

  return (
    <Container className="h-[calc(100vh-10rem)] flex items-center justify-center">
      <Card>

      { 
        loginErrors && 
          loginErrors.map((err) => (
            <p className="bg-red-500 text-white text-center">{err}</p>
          ))
      } 

        <h1 className="text-4xl font-bold my-2 text-center">Sign in</h1>

        <form onSubmit={onSubmit}>
          <Label htmlFor="email">Email</Label>
          <Input type="email" placeholder="Email" 
           {...register('email', {
            required: true
           })}
          />
            { errors.email && (
              <p className="text-red-500">El email es requerido</p>
            )}

          <Label htmlFor="password">Password</Label>
          <Input type="password" placeholder="Password"
          {...register('password', {
            required: true
           })} 
          />
            { errors.password && (
              <p className="text-red-500">La conttaseña es requerida</p>
            )}

          <Button>Sign in</Button>

          <div className="flex justify-between my-4">
            <p className="mr-4"> No tienes cuenta?</p>
            <Link to="/register" className="font-bold">
              Register
            </Link>
          </div>
        </form>
      </Card>
    </Container>
  );
}

export default LoginPage
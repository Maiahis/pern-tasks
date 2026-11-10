import { Button, Card, Container, Input, Label } from "../components/ui/";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
   } = useForm();
  const { signup, errors: signupErrors } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
   const user = await signup(data);
     if(user) navigate("/tasks");
     });

  return (
    <Container className= "h-[calc(100vh-7rem)] flex items-center justify-center">    
      <Card>
  
       { 
        signupErrors && 
         signupErrors.map((err) => (
            <p className="bg-red-500 text-white text-center">{err}</p>
          ))
      }

      <h3 className="text-2xl font-bold text-yellow-200">Register</h3>

      <form onSubmit={onSubmit}>
        <Label htmlFor='username'>Nombre de Usuario</Label>
        <Input placeholder="Ingrese su nombre"
        {...register('username', { required: true })}
        />
        { errors.username && <p className="text-red-500">El nombre de usuario es requerido</p>}

        <Label htmlFor="email">Email</Label>
        <Input type="email" placeholder="Ingrese su email"
        {...register('email', { required: true })} 
        />
        { errors.email && (
          <p className="text-red-500">El email es requerido</p>
        )}
        
        <Label htmlFor="password">Contraseña</Label>
        <Input type="password" placeholder="Ingrese su contraseña"
        {...register('password', { required: true })}
        />
        { errors.password && (
          <p className="text-red-500">La contraseña es requerida</p>
        )}
        

        <Button>Register</Button>

         <div className="flex justify-between my-4">
            <p className="mr-4"> Ya tienes cuenta?</p>
            <Link to="/login" className="font-bold">
              Sign in
            </Link>
          </div>
      </form>   
      </Card>  
    </Container>
  );
}

export default RegisterPage
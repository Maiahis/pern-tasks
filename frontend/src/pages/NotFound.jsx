import { Link } from "react-router-dom";
import { Card } from "../components/ui/";

function NotFound() {
  return (
    <div className="h-[calc(100vh-64px)] flex justify-center items-center flex-col">
      <Card>
        <h1 className="text-4xl font-bold my-2 text-center">Page Not Found</h1>
        <p className="text-lg text-center">La pagina que estas buscando no existe.</p>
        <Link to="/" className="text-blue-500 hover:text-blue-700">
          Go back home
        </Link>
      </Card>
    </div>
  );
}

export default NotFound;
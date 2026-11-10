import { useAuth } from "../context/AuthContext";
import { Card } from "../components/ui";

function HomePage() {
  const data = useAuth()
  console.log(data)
  
  return (
    <div>
      <Card>
        <h1 className="text-3xl font-bold my-4">HomePage</h1>
        <p className="my-4 -center">
          Welcome to the HomePage!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Mollitia enim illo magnam. Perferendis repellendus eos earum
          vitae optio fugit dolores, at fugiat reiciendis cumque. 
          Quas tempore natus numquam in. Reiciendis.
        </p>
      </Card>  
    </div>
  );
}

export default HomePage
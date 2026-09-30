import bcrypyt from "bcrypt";
import { pool } from "../db.js";

export const signin = (req, res) => res.send("Ingresando..");

export const signup =async (req, res) => {
  const { username, email, password } = req.body;  

  try {
    const hashedPassword = await bcrypyt.hash(password, 10);
    console.log
      
    const result = await pool.query(
    "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
    [username, email, hashedPassword]
   );
   console.log(result);

   return res.json(result.rows[0]);

   } catch (error) {
   if (error.code === "23505") {
    return res.status(400).json({ message: "El correo electrónico ya está en uso." });
   }
 }
};

export const signout = (req, res) => res.send("Cerrando sesión..");

export const getProfile = (req, res) => res.send("Perfil de usuario..");
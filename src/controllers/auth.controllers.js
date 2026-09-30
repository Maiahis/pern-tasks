import bcrypyt from "bcrypt";
import { pool } from "../db.js";
import { createAccessToken } from "../libs/jwt.js";

export const signin = async(req, res) => {
   const { email, password } = req.body;

   const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

   if (result.rows.length === 0) {
    return res.status(404).json({
    message: "Usuario no encontrado" });
   }

   const validPassword = await bcrypyt.compare(password, result.rows[0].password);

   if (!validPassword) {
    return res.status(401).json({
        message: "Contraseña incorrecta"
    });
   }

   const token = await createAccessToken({ id: result.rows[0].id, username: result.rows[0].username });

   res.cookie('token', token, {
    httpOnly: true,
    // secure: true,
    sameSite: 'none',
    maxAge: 24 * 60 * 60 * 1000, // 1 day
    });
 
    return res.json(result.rows[0]);
};

export const signup =async (req, res, next) => {
  const { username, password, email } = req.body;  
  console.log(username,password,email);

  try {
    const hashedPassword = await bcrypyt.hash(password, 10);
   
      
    const result = await pool.query(
    "INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING *",
    [username, hashedPassword, email]
   );

   const token = await createAccessToken({ id: result.rows[0].id, username: result.rows[0].username });

   res.cookie('token', token, {
    httpOnly: true,
    // secure: true,
    sameSite: 'none',
    maxAge: 24 * 60 * 60 * 1000, // 1 day
    });   

    return res.json(result.rows[0]);
  

   } catch (error) {
   if (error.code === "23505") {
    return res.status(400).json({ message: "El correo electrónico ya está en uso." });
   }
   next(error);
 }
};

export const signout = (req, res) =>{
    res.clearCookie('token');
    res.sendStatus(200);
};

export const getProfile = async (req, res) => {
  const result = await pool.query("SELECT * FROM users WHERE id = $1", [req.userID]);
  return res.json(result.rows[0]);
};
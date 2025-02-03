import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`Conectado ao MongoDB ${conn.connection.host}`);
  } catch (error) {
    console.log("Falha ao conectar ao MongoDB", error);
    process.exit(1); // 1 é falha, 0 é sucesso
  }
};

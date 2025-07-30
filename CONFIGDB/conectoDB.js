import mongoose from "mongoose";

const uri = "mongodb+srv://usuario:jearim2025@cluster0.oyvizgg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

export const conectoDB = async () => {
    try {
        await mongoose.connect(uri);
        console.log("Conexión a la base de datos exitosa");
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
    }
}
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();


exports.getAllUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch users" });
    }
};



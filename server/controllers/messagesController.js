const { PrismaClient } = require("@prisma/client");
const fs = require("fs").promises;
const prisma = new PrismaClient();


exports.getAllMessages =   async (req, res) => {
    try {
        const messages = await prisma.message.findMany({
            include: { files: true },
            orderBy: {
                created_at: "asc",
            },
        })
        res.status(200).json(messages);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch messages" });
    }
};

exports.postMessage = async (req,res)=>{
    try {
        const {sender_name,content,recipient_name} = req.body;
        const files = req.files.map((file) => ({
            filename: file.filename,
            path: file.path,
            size: file.size,
            mimetype: file.mimetype,
        }));
        const message = await prisma.message.create({
            data:{
                sender_name,
                content,
                recipient_name,
                files: {
                    create: files,
                },
            },
            include: {
                files: true,
            },
        });

        res.status(201).json(message)

    }catch (error){
        console.log(error)
    }
}

exports.deleteMessage = async (req,res)=>{
    try{
        const messageId = req.params.id

        const existingMessage = await prisma.message.findUnique({
            where: { id: messageId },
            include: { files: true },
        });

        if (!existingMessage) {
            return res.status(404).json({ error: "Message not found" });
        }
        for (const file of existingMessage.files) {
            try {
                await fs.unlink(file.path);
            } catch (err) {
                console.error(`Failed to delete file: ${file.path}`, err);
            }
        }
        const deletedMessage =  await prisma.$transaction([
            prisma.file.deleteMany({
                where: {
                    messageId: messageId, // Видаляємо всі файли, пов'язані з повідомленням
                },
            }),
            prisma.message.delete({
                where: {
                    id: messageId,
                },
            }),
        ]);

        res.status(204).json(deletedMessage)

    }catch (err){
        console.log(`Fail to delete message ${err}`)
    }
}

exports.updateMessage =  async (req,res) =>{
    try{
        const messageId = req.params.id
        const {content} = req.body;

        const updatedMessage = await prisma.message.update({
            where: {
                id: messageId,
            },
            data: {
                content,
            },
        });

        res.status(200).json(updatedMessage);

    }catch (err){
        console.log(`Fail to update message ${err}`)
    }
}

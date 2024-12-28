const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();


exports.getAllMessages =   async (req, res) => {
    try {
        const messages = await prisma.message.findMany({
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

        const message = await prisma.message.create({
            data:{
                sender_name,
                content,
                recipient_name
            }
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
        });

        if (!existingMessage) {
            return res.status(404).json({ error: "Message not found" });
        }

        const deletedMessage =  await prisma.message.delete({
            where:{
                id:messageId
            }
        })

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

const { OpenAI } = require("openai");

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

exports.summarizeMessage = async (req, res) => {
  try {
    const { content } = req.body;
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "user",
          content: `Summrize this text in very short format:\n${content}.`,
        },
      ],
    });

    const summary = response.choices[0].message.content.trim();

    res.status(200).json(summary);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch req" });
  }
};

const openai = require('../config/openaiConfig');

const generateMeta = async (req, res) => {
  const { title } = req.body;
  console.log('title::', title);
  const description = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: `Provide a description for the YouTube video called ${title}`,
      },
    ],
    max_tokens: 100,
  });

  const ytTags = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: `Provide 10 keywords for the YouTube video called ${title}`,
      },
    ],
    max_tokens: 100,
  });

  res.status(200).json({
    success: true,
    data: {
      description: description.data.choices[0].message,
      tags: ytTags.data.choices[0].message,
    },
  });
};

const generateImage = async (req, res) => {
  const { prompt } = req.body;
  const image = await openai.createImage({
    prompt,
    n: 1,
    size: '512x512',
  });

  res.status(200).json({
    success: true,
    data: {
      url: image.data.data[0].url,
    },
  });
};

module.exports = { generateMeta, generateImage };

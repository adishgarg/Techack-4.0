const express = require('express');
const router = express.Router();

const openai = require('openai');
openai.api_key = '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';

router.post('/generate-response', async (req, res) => {
  const { prompt } = req.body;
  try {
    const response = await openai.Completion.create({
      engine: "text-davinci-002",
      prompt: prompt,
      max_tokens: 150,
      n: 1,
      stop: null,
    });
    res.json({ botResponse: response.choices[0].text.trim() });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

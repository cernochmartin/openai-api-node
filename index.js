const OpenAI = require('openai').OpenAI 

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"]
}) 

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ 
      role: 'system',
      content: 'Please provide the most comprehensive answers to asked questions.'
    },
    {
      role: 'user',
      content: 'Hello world'
    }
    ],
    model: 'gpt-3.5-turbo',
  })

  console.log(completion)
}

main()
// const options = {
//   method: 'POST',
//   headers: {Authorization: 'Bearer sk-uavqkrnncuzqsqsrendmwewbnobdlszqbhupzbknlsuwnolv', 'Content-Type': 'application/json'},
//   body: '{"model":"deepseek-ai/DeepSeek-V3","messages":[{"role":"user","content":"中国大模型行业2025年将会迎来哪些机遇和挑战？"}],"stream":false,"max_tokens":512,"stop":["null"],"temperature":0.7,"top_p":0.7,"top_k":50,"frequency_penalty":0.5,"n":1,"response_format":{"type":"text"},"tools":[{"type":"function","function":{"description":"<string>","name":"<string>","parameters":{},"strict":false}}]}'
// };

// fetch('https://api.siliconflow.cn/v1/chat/completions', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));


import OpenAI from 'openai';

const client = new OpenAI({
  baseURL:'https://api.siliconflow.cn/v1',
  apiKey: 'sk-uavqkrnncuzqsqsrendmwewbnobdlszqbhupzbknlsuwnolv', // This is the default and can be omitted
});

async function main() {
  const chatCompletion = await client.chat.completions.create({
    messages: [{ role: 'user', content: 'Say this is a test' }],
    model: 'deepseek-ai/DeepSeek-R1',
  });
  console.log(chatCompletion)
}

main()
// console.log(await main());
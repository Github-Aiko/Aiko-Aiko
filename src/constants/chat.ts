import { ChatInterface, ConfigInterface, ModelOptions } from '@type/chat';

const date = new Date();
const dateString =
  ('0' + date.getDate()).slice(-2) +
  '-' +
  ('0' + (date.getMonth() + 1)).slice(-2) +
  '-' +
  date.getFullYear();

const KnowledgeCutoff = new Date();
const KnowledgeCutoffString =
  ('0' + (KnowledgeCutoff.getMonth() + 1)).slice(-2) +
  '-' +
  KnowledgeCutoff.getFullYear();
  

export const defaultSystemMessage = `You are AikoAi, a large language model trained by AikoCute.
Knowledge cutoff: ${KnowledgeCutoffString}
Current date: ${dateString}
Telegram BOT: https://t.me/aiko_ai_bot
Owner: AikoCute
`
;

export const modelOptions: ModelOptions[] = [
  'Aiko-GPT-01',
  // 'gpt-3.5-turbo-0301',
  'Aiko-GPT-02',
  // 'gpt-4-0314',
  'Aiko-GPT-03',
  // 'gpt-4-32k-0314',
];

export const defaultModel = 'Aiko-GPT-01';

export const modelMaxToken = {
  'gpt-3.5-turbo': 4096,
  'gpt-3.5-turbo-0301': 4096,
  'gpt-4': 8192,
  'gpt-4-0314': 8192,
  'gpt-4-32k': 32768,
  'gpt-4-32k-0314': 32768,
  'Aiko-GPT-01': 4096,
  'Aiko-GPT-02': 8192,
  'Aiko-GPT-03': 32768,
};

export const defaultUserMaxToken = 4000;

export const defaultChatConfig: ConfigInterface = {
  model: 'gpt-3.5-turbo',
  max_tokens: defaultUserMaxToken,
  temperature: 0.7,
  presence_penalty: 0,
  top_p: 1,
  frequency_penalty: 0,
};

export const generateDefaultChat = (title?: string): ChatInterface => ({
  title: title ? title : 'New Chat',
  messages: [{ role: 'system', content: defaultSystemMessage }],
  config: { ...defaultChatConfig },
  titleSet: false,
});

export const codeLanguageSubset = [
  'python',
  'javascript',
  'java',
  'go',
  'bash',
  'c',
  'cpp',
  'csharp',
  'css',
  'diff',
  'graphql',
  'json',
  'kotlin',
  'less',
  'lua',
  'makefile',
  'markdown',
  'objectivec',
  'perl',
  'php',
  'php-template',
  'plaintext',
  'python-repl',
  'r',
  'ruby',
  'rust',
  'scss',
  'shell',
  'sql',
  'swift',
  'typescript',
  'vbnet',
  'wasm',
  'xml',
  'yaml',
];

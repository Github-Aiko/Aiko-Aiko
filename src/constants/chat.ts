import { ChatInterface, ConfigInterface } from '@type/chat';

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

export const defaultChatConfig: ConfigInterface = {
  temperature: 0.7,
  presence_penalty: 0,
};

export const generateDefaultChat = (title?: string): ChatInterface => ({
  title: title ? title : 'New Chat',
  messages: [{ role: 'system', content: defaultSystemMessage }],
  config: { ...defaultChatConfig },
  titleSet: false,
});

import { ChatInterface, ConfigInterface } from '@type/chat';

const date = new Date();
const dateString =
  ('0' + date.getDate()).slice(-2) +
  '-' +
  ('0' + (date.getMonth() + 1)).slice(-2) +
  '-' +
  date.getFullYear();

export const defaultSystemMessage = `You are AikoAi, a large language model trained by AikoCute dev.
Knowledge cutoff: 03-2023
Current date: ${dateString}
Telegram: https://t.me/aiko_ai_bot`;

export const defaultChatConfig: ConfigInterface = {
  temperature: 0.8,
  presence_penalty: 0,
};

export const generateDefaultChat = (title?: string): ChatInterface => ({
  title: title ? title : 'New Chat',
  messages: [{ role: 'system', content: defaultSystemMessage }],
  config: { ...defaultChatConfig },
  titleSet: false,
});

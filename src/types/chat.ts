import { Theme } from './theme';

export type Role = 'user' | 'Aiko AI' | 'system';
export const roles: Role[] = ['user', 'Aiko AI', 'system'];

export interface MessageInterface {
  role: Role;
  content: string;
}

export interface ChatInterface {
  title: string;
  messages: MessageInterface[];
  config: ConfigInterface;
  titleSet: boolean;
}

export interface ConfigInterface {
  temperature: number;
  presence_penalty: number;
}

export interface LocalStorageInterface {
  chats: ChatInterface[];
  currentChatIndex: number;
  apiKey: string;
  apiFree: boolean;
  apiFreeEndpoint: string;
  theme: Theme;
}

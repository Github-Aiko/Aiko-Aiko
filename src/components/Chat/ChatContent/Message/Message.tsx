import React from 'react';

import Avatar from './Avatar';
import MessageContent from './MessageContent';

import { Role } from '@type/chat';
import RoleSelector from './RoleSelector';
import useStore from '@store/store';

// const backgroundStyle: { [role in Role]: string } = {
//   user: 'dark:bg-gray-800',
//   assistant: 'bg-gray-50 dark:bg-[#444654]',
//   system: 'bg-gray-50 dark:bg-[#444654]',
// };
const backgroundStyle = ['dark:bg-gray-800', 'bg-gray-50 dark:bg-[#444654]'];

const Message = React.memo(
  ({
    role,
    content,
    messageIndex,
    sticky = false,
  }: {
    role: Role;
    content: string;
    messageIndex: number;
    sticky?: boolean;
  }) => {
    const advancedMode = useStore((state) => state.advancedMode);
    return (
      <div
        className={`w-full border-b border-black/10 dark:border-gray-900/50 text-gray-800 dark:text-gray-100 group ${
          backgroundStyle[messageIndex % 2]
        }`}
      >
        <div class="text-base gap-4 md:gap-6 m-auto md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0">
          <div class="w-[calc(100%-50px)]">
            {advancedMode && (
              <div class="flex flex-col w-full py-2 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]">
                <textarea oninput="autoGrow(this)" tabindex="0" data-id="" id="questionForm" class="m-0 w-full resize-none border-0 bg-transparent p-0 pl-2 pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent md:pl-0" style="overflow-y: auto; height: 24px; word-wrap: break-word;"></textarea>
                <button id="submitBtn" class="absolute p-1 rounded-md text-gray-500 bottom-1.5 right-1 md:bottom-2.5 md:right-2 hover:bg-gray-100 dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent">
                  <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </div>
            )}
            <MessageContent role={role} content={content} messageIndex={messageIndex} sticky={sticky} />
          </div>
        </div>
      </div>
    );
  }
);

export default Message;
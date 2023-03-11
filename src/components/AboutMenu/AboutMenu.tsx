import React, { useState } from 'react';
import PopupModal from '@components/PopupModal';
import AboutIcon from '@icon/AboutIcon';
import Updates from '@components/Menu/MenuOptions/Updates';

const AboutMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <a
        className='flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm'
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        <div>
          <AboutIcon />
        </div>
        About
      </a>
      {isModalOpen && (
        <PopupModal
          title='About'
          setIsModalOpen={setIsModalOpen}
          cancelButton={false}
        >
          <div className='p-6 border-b border-gray-200 dark:border-gray-600'>
            <div className='min-w-fit text-gray-900 dark:text-gray-300 text-sm flex flex-col gap-2'>
              <p>AikoAI is an amazing web application that allows you to interact with AikoAI Chatbots!</p>
              <Updates isButton />

              <h2 className='text-lg font-bold'>Telegram Server</h2>
              <p>We invite you to join our Telegram community! Our Telegram group is a fantastic platform to exchange ChatGPT ideas and tips, submit feature requests for Free ChatGPT, and interact with the developers behind the project, as well as other AI enthusiasts who share your passion.</p>

              <p>To join our server, simply click on the following link: <a className='link' href='https://t.me/aiko_ai_bot' target='_blank'>https://t.me/aiko_ai_bot</a>. We can't wait to see you there!</p>

              <h2 className='text-lg font-bold'>Privacy Statement</h2>
              <p>We highly value your privacy and are committed to safeguarding the privacy of our users. We do not collect or store any text you enter or receive from the AikoAI server in any form. Our source code is available for your inspection to verify this statement.</p>

              <p>We prioritize the security of your API key and handle it with utmost care. If you use your own API key, your key is exclusively stored on your browser and never shared with any third-party entity. It is solely used for the intended purpose of accessing the AikoAI API and not for any other unauthorized use.</p>
              <h2 className='text-lg font-bold'>Support</h2>
              <p>We strive to provide you with useful and amazing features around the clock. And just like any project, your support and motivation will be instrumental in helping us keep moving forward!</p>
              <p>If you would like to support the team, consider buying us a coffee by clicking on the button below. Every contribution, no matter how small, helps us to maintain and improve our service.</p>
              <a href="https://ko-fi.com/aikocute" target="_blank">
                  <img src="https://ko-fi.com/img/githubbutton_sm.svg" alt="support" />
              </a>
              <p>Thank you for being a part of our community, and we look forward to serving you better in the future.</p>
            </div>
          </div>
        </PopupModal>
      )}
    </>
  );
};

export default AboutMenu;

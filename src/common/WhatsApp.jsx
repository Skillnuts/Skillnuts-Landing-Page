import React from "react";
import { useState } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import favicon from '../../public/favicon.svg'

const WhatsApp = () => {
  const questionnaire = [
    "Hi there! How can we assist you today?",
    "Please enter your name:",
    "What's your email address?",
    "Type your query or message here:",
  ];

  const messages = questionnaire.join('\n');

  return (
    <>
      <FloatingWhatsApp
        phoneNumber="9370173578"
        accountName="Skillnuts"
        chatMessage={`Hello there,\nHow can I help you?`}
        avatar={favicon}
        messages={messages}
        statusMessage="Connect Better, Grow Faster"
        allowClickAway={true}
        notification={true}
        notificationSound={true}
      />
    </>
  );
};

export default WhatsApp;

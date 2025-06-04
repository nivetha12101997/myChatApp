import { FETCH_CHAT_LIST,FETCH_CHAT_MESSAGES } from "./type";

export const fetchChatList = () => {
  return {
    type: FETCH_CHAT_LIST,
    payload: [
      {
        id: '1',
        name: 'Ravi',
        lastMessage: 'Hey, how are you?',
        timestamp: '2023-10-01T12:00:00Z',
      },
      {
        id: '2',
        name: 'Sita',
        lastMessage: 'Catch up later.',
        timestamp: '2023-10-01T13:00:00Z',
      },
      {
        id: '3',
        name: 'Raghul',
        lastMessage: 'Did you went to the movie?',
        timestamp: '2023-10-01T14:00:00Z',
      },
      {
        id: '4',
        name: 'Kavitha',
        lastMessage: 'Good Morning.',
        timestamp: '2023-10-01T15:00:00Z',
      },
    ],
  };
}

export const fetchChatMessages = (chatName) => {
  return {
    type: FETCH_CHAT_MESSAGES,
    payload: {
      chatName,
      messages: [
        { sender: chatName, text: 'Hey, how are you?', timestamp: '2023-10-01T12:00:00Z' },
        { sender: 'You', text: 'I am good, thanks!', timestamp: '2023-10-01T12:01:00Z' },
      ],
    },
  };
}

export const sendData = (chatName, message) => {
  return {
    type: FETCH_CHAT_MESSAGES,
    payload: {
      chatName,
      messages: [
        { sender: chatName, text: message, timestamp: new Date().toISOString() },
        { sender: 'You', text: 'Message sent!', timestamp: new Date().toISOString() },
      ],
    },
  };
}
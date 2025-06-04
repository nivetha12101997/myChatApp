import {FETCH_CHAT_LIST, FETCH_CHAT_MESSAGES,SEND_MESSAGE} from "./type";
const initialState ={
    messages: [],
    chatList: [],
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CHAT_LIST:
            return {
                ...state,
                chatList: action.payload,
            };
        case FETCH_CHAT_MESSAGES:
            return {
                ...state,
                messages: action.payload.messages,
            };
        case SEND_MESSAGE:
            const newMessage = {
                sender: action.payload.chatName,
                text: action.payload.message,
                timestamp: new Date().toISOString(),
            };
            return {
                ...state,
                messages: [...state.messages, newMessage],
            };
        default:
            return state;
    }
};
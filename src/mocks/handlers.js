import { http, HttpResponse } from 'msw'
 
export const handlers = [
  http.get('https://api.example.com/chatlist', () => {
    return HttpResponse.json([
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
    name: 'kavitha',
    lastMessage: 'Good Morning.',
    timestamp: '2023-10-01T15:00:00Z',
  }
    ])
  }),
]
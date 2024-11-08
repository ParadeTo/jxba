import {games as games2} from './2/games'
import {comments as comments2} from './2/comments'

export const sessions = [
  {
    id: 2,
    name: '第二届',
  },
]

export const currentSessionId = 2
export const currentSession = sessions.find((s) => s.id === currentSessionId)

export const getGames = (sessionId: number) => {
  return [null, games2][sessionId - 1]
}

export const getComments = (sessionId: number) => {
  return [null, comments2][sessionId - 1]
}

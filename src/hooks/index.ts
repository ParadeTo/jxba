import {useContext} from 'react'
import {sessionContext} from '../context'
import {getGames} from '../data'

export const useGames = () => {
  const sessionId = useContext(sessionContext)
  const games = getGames(sessionId)
  return games
}

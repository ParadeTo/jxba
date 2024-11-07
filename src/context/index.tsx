import {createContext} from 'react'
import {currentSessionId} from '../data'

export const sessionContext = createContext(currentSessionId)

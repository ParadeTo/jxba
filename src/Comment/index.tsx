import {useParams} from 'react-router-dom'
import {getComments} from '../data'
import {useContext} from 'react'
import {sessionContext} from '../context'
import {Typography} from 'react-vant'
const {Title, Text} = Typography

export function Comment() {
  const params = useParams<{id: string}>()
  const sessionId = useContext(sessionContext)
  const comments = getComments(sessionId)!
  // @ts-expect-error ignore
  const comment = comments[params.id] || {}
  return (
    <div style={{padding: '10px'}}>
      <Title level={5}>{comment.title}</Title>
      <Text>{comment.content}</Text>
      <Title level={6} style={{textAlign: 'right'}}>
        记者：{comment.reporter}
      </Title>
    </div>
  )
}

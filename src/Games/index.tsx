import {useNavigate} from 'react-router-dom'
import {Card, Flex, Search, Typography} from 'react-vant'
import {useGames} from '../hooks'
import {formatDate} from '../utils'
import {useMemo, useState} from 'react'

const {Item} = Flex
const {Text, Link} = Typography

export function Games() {
  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate()
  const games = useGames()
  const resolvedGames = useMemo(() => {
    return games
      ?.filter((g) => {
        if (
          !keyword ||
          g.guest.indexOf(keyword) > -1 ||
          g.host.indexOf(keyword) > -1
        )
          return true
        return false
      })
      ?.sort((a, b) => b.time - a.time)
  }, [games, keyword])
  return (
    <div style={{padding: '10px'}}>
      <Search
        style={{marginBottom: '10px'}}
        value={keyword}
        onChange={setKeyword}
        clearable
        placeholder='请输入球队'
      />
      {resolvedGames?.map((game) => {
        const isHostWin = game.hostScore > game.guestScore
        return (
          <Card round style={{marginBottom: '10px'}}>
            <Card.Body>
              <Flex
                justify='between'
                align='center'
                style={{marginBottom: '10px'}}>
                <Item>
                  <Text type='warning' strong>
                    {game.type}
                  </Text>
                  &nbsp;
                  <Text>{formatDate(game.time)}</Text>
                </Item>
                <Item>
                  <Link
                    center
                    onClick={() => {
                      navigate(`/comments/${game.comment}`)
                    }}>
                    球评
                  </Link>
                </Item>
              </Flex>

              <Flex justify='center' align='center'>
                <Item span={10}>
                  <Flex gutter={20} justify='end' align='center'>
                    <Item>
                      <Text center size='md' strong={isHostWin}>
                        {game.host}
                      </Text>
                    </Item>
                    <Item>
                      <Text center size='xl' strong={isHostWin}>
                        {game.hostScore}
                      </Text>
                    </Item>
                  </Flex>
                </Item>
                <Item span={2} style={{textAlign: 'center'}}>
                  <Text center>:</Text>
                </Item>
                <Item span={10}>
                  <Flex gutter={20} justify='start' align='center'>
                    <Item>
                      <Text center size='xl' strong={!isHostWin}>
                        {game.guestScore}
                      </Text>
                    </Item>
                    <Item>
                      <Text center size='md' strong={!isHostWin}>
                        {game.guest}
                      </Text>
                    </Item>
                  </Flex>
                </Item>
              </Flex>
            </Card.Body>
          </Card>
        )
      })}
    </div>
  )
}

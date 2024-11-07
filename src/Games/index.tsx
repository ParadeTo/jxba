import {useNavigate} from 'react-router-dom'
import {Card, Flex, Typography} from 'react-vant'
import {getGames} from '../data'
import {useGames} from '../hooks'
import {formatDate} from '../utils'
const {Item} = Flex
const {Title, Text, Link} = Typography
export function Games() {
  const navigate = useNavigate()
  const games = useGames()
  const sortedGames = games?.sort((a, b) => b.time - a.time)
  return (
    <div style={{padding: '10px'}}>
      {sortedGames?.map((game) => {
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

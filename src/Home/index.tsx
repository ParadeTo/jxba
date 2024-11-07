import {Card, Flex, Space, Tabs, Typography} from 'react-vant'
const {Item} = Flex
const {Title, Text} = Typography

function TeamRank() {
  return (
    <div style={{padding: '10px'}}>
      <Card round style={{marginBottom: '10px'}}>
        <Card.Header border>球队积分榜</Card.Header>
        <Card.Body>
          <Flex align='center' justify='center'>
            <Item span={4}>
              <Title center level={6}>
                No.
              </Title>
            </Item>
            <Item span={8}>
              <Title center level={6}>
                球队
              </Title>
            </Item>
            <Item span={6}>
              <Title center level={6}>
                积分
              </Title>
            </Item>
            <Item span={6}>
              <Title center level={6}>
                胜率
              </Title>
            </Item>
          </Flex>
          <Flex>
            <Item span={4}>
              <Title center level={6} style={{fontWeight: '400'}}>
                1
              </Title>
            </Item>
            <Item span={8}>
              <Title center level={6} style={{fontWeight: '400'}}>
                球队
              </Title>
            </Item>
            <Item span={6}>
              <Title center level={6} style={{fontWeight: '400'}}>
                4
              </Title>
            </Item>
            <Item span={6}>
              <Title center level={6} style={{fontWeight: '400'}}>
                80%
              </Title>
            </Item>
          </Flex>
          <Flex>
            <Item span={4}>
              <Title center level={6} style={{fontWeight: '400'}}>
                1
              </Title>
            </Item>
            <Item span={8}>
              <Title center level={6} style={{fontWeight: '400'}}>
                球队
              </Title>
            </Item>
            <Item span={6}>
              <Title center level={6} style={{fontWeight: '400'}}>
                4
              </Title>
            </Item>
            <Item span={6}>
              <Title center level={6} style={{fontWeight: '400'}}>
                80%
              </Title>
            </Item>
          </Flex>
        </Card.Body>
      </Card>
    </div>
  )
}

function PlayerRank() {
  return (
    <div style={{padding: '10px'}}>
      <Card round style={{marginBottom: '10px'}}>
        <Card.Header border>个人得分榜</Card.Header>
        <Card.Body>
          <Flex align='center' justify='center'>
            <Item span={8}>
              <Title center level={6}>
                No.
              </Title>
            </Item>
            <Item span={8}>
              <Title center level={6}>
                姓名
              </Title>
            </Item>
            <Item span={8}>
              <Title center level={6}>
                场均得分
              </Title>
            </Item>
          </Flex>
          <Flex>
            <Item span={8}>
              <Title center level={6} style={{fontWeight: '400'}}>
                1
              </Title>
            </Item>
            <Item span={8}>
              <Title center level={6} style={{fontWeight: '400'}}>
                ayou
              </Title>
            </Item>
            <Item span={8}>
              <Title center level={6} style={{fontWeight: '400'}}>
                40
              </Title>
            </Item>
          </Flex>
          <Flex>
            <Item span={8}>
              <Title center level={6} style={{fontWeight: '400'}}>
                1
              </Title>
            </Item>
            <Item span={8}>
              <Title center level={6} style={{fontWeight: '400'}}>
                ayou
              </Title>
            </Item>
            <Item span={8}>
              <Title center level={6} style={{fontWeight: '400'}}>
                40
              </Title>
            </Item>
          </Flex>
        </Card.Body>
      </Card>
    </div>
  )
}

export function Home() {
  return (
    <Tabs type='card' defaultActive={0}>
      <Tabs.TabPane title={`球队`}>
        <TeamRank />
      </Tabs.TabPane>
      <Tabs.TabPane title={`个人`}>
        <PlayerRank />
      </Tabs.TabPane>
    </Tabs>
  )
}

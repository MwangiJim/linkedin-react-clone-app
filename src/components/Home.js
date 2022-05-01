import React from 'react'
import Sidebar from './Sidebar'
import styled from 'styled-components'
import Feed from './Feed'
import RightContent from './RightContent'

function Home() {
  return (
      <Container>
          <Sidebar/>  
          <Feed/>
          <RightContent/>
      </Container>
  )
}

export default Home
let Container = styled.div`
 display:flex;
 margin:10px 3%;
`
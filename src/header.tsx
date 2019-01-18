import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.header`
  padding: 1em 2em;
  background-color: #137cbd;
  color: #fff;
  display: flex;
  align-items: center;
`

const H1 = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`

const Spacer = styled.span`
  width: 2em;
`

const Placeholder = styled.span`
  flex: 1;
`

const Link = styled.a`
  color: inherit;
  text-decoration: none;
  padding: 8px;
  border-radius: 4px;
  transition: 0.3s;

  :hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`

const Header = () => (
  <Wrapper>
    <H1>TS Creator</H1>
    <sup>{process.env.VERSION}</sup>
    <Spacer />
    <span>TypeScript code factory made easy</span>
    <Placeholder />
    <Link href="https://github.com/HearTao/ts-creator">Fork me on GitHub</Link>
  </Wrapper>
)

export default Header

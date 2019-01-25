import React from 'react'
import styled from 'styled-components'

import logo from './assets/logo.svg'

const Wrapper = styled.header`
  background-color: rgba(19, 124, 189, 0.1);
  color: #137cbd;
  display: flex;
  align-items: center;
`

const H1 = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  display: flex;
  white-space: nowrap;
  align-items: center;
  margin: 1ex 1em;
`

const Title = styled.div`
  display: flex;
  flex-direction: column;
`

const Logo = styled.img`
  height: 3rem;
  margin-right: 1ex;
`

const Version = styled.sup`
  font-weight: 400;
  font-size: 1rem;
`

const Slogan = styled.span`
  margin-top: 1ex;
  font-weight: 200;
  font-size: 1rem;
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
  display: flex;
  align-items: center;
  padding: 8px;
  transition: 0.3s;
  height: 100%;
  position: relative;
  margin-right: 1em;

  :hover {
    background-color: rgba(19, 124, 189, 0.2);
    ::after {
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      background-color: #137cbd;
      position: absolute;
      bottom: 0;
      left: 0;
      transition: 0.3s;
    }
  }
`

const Header = () => (
  <Wrapper>
    <H1>
      <Logo src={logo} />
      <Title>
        <span>
          TS Creator<Version>{process.env.VERSION}</Version>
        </span>
        <Slogan>TypeScript code factory made easy</Slogan>
      </Title>
    </H1>

    <Spacer />
    <Placeholder />
    <Link href="https://github.com/HearTao/ts-creator">Fork me on GitHub</Link>
  </Wrapper>
)

export default Header

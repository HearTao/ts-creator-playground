import React from 'react'
import styled from 'styled-components'

import logo from './assets/logo.svg'
import Menu from './menu'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import Checkbox from '@material-ui/core/Checkbox'
import Divider from '@material-ui/core/Divider'
import { PlaygroundOptions, UpdateOptionsCallback } from './options'
import { CreatorTarget } from './helper'

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

  &:last-child {
    margin-right: 1em;
  }

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

interface Props {
  options: PlaygroundOptions
  onChange: UpdateOptionsCallback
}

const Header = (props: Props) => (
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
    <Menu placeholder={<Link>Options</Link>}>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              color="primary"
              checked={props.options.readonly || false}
              onChange={(_, v) => props.onChange('readonly', v)}
            />
          }
          label="Readonly"
        />
        <Divider />
        <FormControlLabel
          control={
            <Switch
              color="primary"
              checked={props.options.tsx || false}
              onChange={(_, v) => props.onChange('tsx', v)}
            />
          }
          label="Tsx"
        />
      </FormGroup>
      <Divider />
      <FormGroup row={true}>
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              checked={props.options.target === CreatorTarget.none}
              onChange={() => props.onChange('target', CreatorTarget.none)}
            />
          }
          label="None"
        />
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              checked={props.options.target === CreatorTarget.expression}
              onChange={() => props.onChange('target', CreatorTarget.expression)}
            />
          }
          label="Expression"
        />
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              checked={props.options.target === CreatorTarget.runnable}
              onChange={() => props.onChange('target', CreatorTarget.runnable)}
            />
          }
          label="Runnable"
        />
        <FormControlLabel
          control={
            <Checkbox
              color="primary"
              checked={props.options.target === CreatorTarget.esmodule}
              onChange={() => props.onChange('target', CreatorTarget.esmodule)}
            />
          }
          label="ESmodule"
        />
      </FormGroup>
    </Menu>
    <Link href="https://github.com/HearTao/ts-creator">Fork me on GitHub</Link>
  </Wrapper>
)

export default Header

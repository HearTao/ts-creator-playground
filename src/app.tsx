import debounce from 'lodash/debounce'
import React, { Component } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import tsCreator from './ts-creator/src'

import MonacoEditor from './editor'

import 'modern-normalize/modern-normalize.css'

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  #root {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`

const AppWrapper = styled.div``

const Wrapper = styled.div`
  display: flex;
  align-items: stretch;
  flex: 1;
  height: 100%;
`

const Editor = styled(MonacoEditor)`
  border: 1px solid #aaa;
  margin: 1em;
  overflow: hidden;
  flex: 1;
  position: relative;
`

interface IState {
  transformed: string
}

class App extends Component<{}, IState> {
  public state = {
    transformed: '',
  }

  public handleChange = debounce((value: string) => {
    this.setState({
      transformed: tsCreator(value),
    })
  }, 200)

  public render() {
    const { transformed } = this.state
    return (
      <>
        <GlobalStyle />
        <div>Hello World</div>
        <Wrapper>
          <Editor language="typescript" onChange={this.handleChange} />
          <Editor value={transformed} language="typescript" options={{ readOnly: true }} />
        </Wrapper>
      </>
    )
  }
}

export default App

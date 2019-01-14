import React, { Component } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

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

const CodeMirror = styled(MonacoEditor)`
  border: 1px solid #aaa;
  margin: 1em;
  overflow: hidden;
  flex: 1;
  position: relative;
`

class App extends Component {
  public render() {
    return (
      <>
        <GlobalStyle />
        <div>Hello World</div>
        <Wrapper>
          <CodeMirror language="typescript" />
          <CodeMirror language="typescript" />
        </Wrapper>
      </>
    )
  }
}

export default App

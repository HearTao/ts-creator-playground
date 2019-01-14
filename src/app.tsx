import React, { Component } from 'react'
import { UnControlled } from 'react-codemirror2'
import styled, { createGlobalStyle } from 'styled-components'

import 'codemirror/addon/dialog/dialog'
import 'codemirror/addon/edit/matchbrackets'
import 'codemirror/addon/lint/json-lint'
import 'codemirror/addon/lint/lint'
import 'codemirror/addon/search/jump-to-line'
import 'codemirror/addon/search/search'
import 'codemirror/addon/search/searchcursor'
import 'codemirror/addon/selection/active-line'
import 'codemirror/mode/javascript/javascript'

import 'codemirror/addon/dialog/dialog.css'
import 'codemirror/addon/lint/lint.css'
import 'codemirror/lib/codemirror.css'

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

const CodeMirror = styled(UnControlled)`
  border: 1px solid #777;
  overflow: hidden;
  flex: 1;
  height: 100%;
  position: relative;

  .CodeMirror {
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`

class App extends Component {
  public render() {
    return (
      <>
        <GlobalStyle />
        <div>Hello World</div>
        <Wrapper>
          <CodeMirror
            options={{
              gutters: ['CodeMirror-lint-markers'],
              lineNumbers: true,
              matchBrackets: true,
              mode: 'application/typescript',
              styleActiveLine: true,
            }}
          />
          <CodeMirror
            options={{
              gutters: ['CodeMirror-lint-markers'],
              lineNumbers: true,
              matchBrackets: true,
              mode: 'application/typescript',
              styleActiveLine: true,
            }}
          />
        </Wrapper>
      </>
    )
  }
}

export default App

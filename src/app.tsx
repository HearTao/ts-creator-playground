import debounce from 'lodash/debounce'
import React, { Component } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import tsCreator from 'ts-creator'

import MonacoEditor from './editor'
import Header from './header'

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

const LoadingIndicator = styled.div`
  margin: 0 auto;
  margin-top: 1em;
  padding: 8px;
  background-color: rgba(19, 124, 189, 0.1);
  border: 1px solid #137cbd;
  border-radius: 4px;
  color: #137cbd;
`

interface IState {
  transformed: string
  loading: boolean
}

class App extends Component<{}, IState> {
  public state = {
    loading: true,
    transformed: '',
  }

  public handleChange = debounce((value: string) => {
    this.setState({
      transformed: tsCreator(value),
    })
  }, 200)

  public async componentDidMount() {
    this.setState({
      loading: false,
    })
  }

  public render() {
    const { transformed, loading } = this.state
    return (
      <>
        <GlobalStyle />
        <Header />
        {loading && <LoadingIndicator>Equipping ts-creator, don't panic</LoadingIndicator>}
        <Wrapper>
          <Editor language="typescript" onChange={this.handleChange} />
          <Editor value={transformed} language="typescript" options={{ readOnly: true }} />
        </Wrapper>
      </>
    )
  }
}

export default App

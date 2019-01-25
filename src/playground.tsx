import debounce from 'lodash/debounce'
import React, { Component } from 'react'
import styled from 'styled-components'

import tsCreator from 'ts-creator/dist/index.web'
import MonacoEditor from './editor'

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
  loading: boolean
}

class Playground extends Component<{}, IState> {
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
      <Wrapper>
        <Editor language="typescript" onChange={this.handleChange} />
        <Editor value={transformed} language="typescript" options={{ readOnly: true }} />
      </Wrapper>
    )
  }
}

export default Playground

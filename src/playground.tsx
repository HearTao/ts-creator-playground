import debounce from 'lodash/debounce'
import React, { Component } from 'react'
import styled from 'styled-components'

import tsCreator from 'ts-creator/dist/index.web'
import * as MonacoApi from 'monaco-editor/esm/vs/editor/editor.api'
import MonacoEditor from './editor'
import { PlaygroundOptions } from './options'

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
  code: string
  transformed: string
}

interface Props {
  options: PlaygroundOptions
}

export default class Playground extends Component<Props, IState> {
  public state = {
    code: '',
    transformed: '',
  }

  public handleChange = debounce((value: string) => {
    this.setState({
      code: value,
      transformed: value ? tsCreator(value, this.props.options) : '',
    })
  }, 200)

  public UNSAFE_componentWillReceiveProps(props: Props) {
    this.handleChange(this.state.code)
  }

  public async componentDidMount() {
    MonacoApi.languages.typescript.typescriptDefaults.addExtraLib(
      process.env.tsLib,
      'typescript.d.ts',
    )
  }

  public render() {
    const { transformed } = this.state
    return (
      <Wrapper>
        <Editor language="typescript" onChange={this.handleChange} />
        <Editor
          value={transformed}
          language="typescript"
          options={{ readOnly: this.props.options.readonly }}
        />
      </Wrapper>
    )
  }
}

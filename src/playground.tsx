import debounce from 'lodash/debounce'
import React, { Component } from 'react'
import styled from 'styled-components'

import tsCreator from 'ts-creator/dist/index.web'
import * as MonacoApi from 'monaco-editor/esm/vs/editor/editor.api'
import MonacoEditor from './editor'
import { PlaygroundOptions } from './options'
import Snackbar from '@material-ui/core/Snackbar'
import { CreatorTarget } from './helper'

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
  disposable: MonacoApi.IDisposable | null
  errors: string | null
  transformed: string
}

interface Props {
  options: PlaygroundOptions
}

export default class Playground extends Component<Props, IState> {
  public state: IState = {
    code: '',
    disposable: null,
    errors: null,
    transformed: '',
  }

  public handleChange = debounce((value: string, options: PlaygroundOptions) => {
    let transformed: string = ''
    try {
      transformed = value ? tsCreator(value, options) : ''
    } catch (e) {
      this.setState({
        errors: `[internal error]: ${e.message}`,
      })
    }

    this.setState({
      code: value,
      transformed,
    })
  }, 200)

  public setupTsLib = debounce((options: PlaygroundOptions) => {
    const libName = 'typescript.d.ts'
    if (this.state.disposable) {
      this.state.disposable.dispose()
    }

    switch (options.target) {
      case CreatorTarget.expression:
        this.setState({
          disposable: MonacoApi.languages.typescript.typescriptDefaults.addExtraLib(
            process.env.tsLib
              .split(/\r?\n/)
              .filter(x => !x.startsWith('export ='))
              .join('\n'),
            libName,
          ),
        })
        break
      case CreatorTarget.esmodule:
      case CreatorTarget.runnable:
        this.setState({
          disposable: MonacoApi.languages.typescript.typescriptDefaults.addExtraLib(
            `declare module 'typescript' { ${process.env.tsLib} }`,
            libName,
          ),
        })
        break
    }
  }, 200)

  public UNSAFE_componentWillReceiveProps(props: Props) {
    this.setupTsLib(props.options)
    this.handleChange(this.state.code, props.options)
  }

  public handleCodeChange = (value: string) => {
    this.handleChange(value, this.props.options)
  }

  public async componentDidMount() {
    this.setupTsLib(this.props.options)
  }

  public handleClose = (_, reason: string) => {
    if (reason === 'clickaway') {
      return
    }

    this.setState({ errors: null })
  }

  public render() {
    const { errors, transformed } = this.state
    return (
      <Wrapper>
        <Editor language="typescript" onChange={this.handleCodeChange} />
        <Editor
          value={transformed}
          language="typescript"
          options={{ readOnly: this.props.options.readonly }}
        />
        <Snackbar
          anchorOrigin={{
            horizontal: 'left',
            vertical: 'bottom',
          }}
          open={errors !== null}
          autoHideDuration={6000}
          onClose={this.handleClose}
          message={<span>{errors}</span>}
        />
      </Wrapper>
    )
  }
}

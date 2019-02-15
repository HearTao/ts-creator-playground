import debounce from 'lodash/debounce'
import React, { Component, createRef } from 'react'
import MonacoEditor, { MonacoEditorProps } from 'react-monaco-editor'
import ResizeObserver from 'resize-observer-polyfill'

interface IState {
  width: number
  height: number
}

interface IProps extends MonacoEditorProps {
  className?: string
}

/**
 * a wrapper for react-monaco-editor to make it auto-resizable
 */
class Editor extends Component<IProps, IState> {
  public handleResize = debounce(([entry]: ResizeObserverEntry[]) => {
    this.setState({
      height: entry.contentRect.height,
      width: entry.contentRect.width,
    })
  }, 100)

  public state = {
    height: 100,
    width: 100,
  }

  private observer: ResizeObserver | null = null
  private container = createRef<HTMLDivElement>()

  public componentDidMount() {
    this.observer = new ResizeObserver(this.handleResize)
    if (this.container.current) {
      this.observer.observe(this.container.current)
    }
  }

  public componentWillUnmount() {
    if (this.observer) {
      this.observer.disconnect()
    }
  }

  public render() {
    const { width, height } = this.state
    const { width: w, height: h, className, ...restProps } = this.props
    return (
      <div className={className}>
        <div style={{ height: '100%', width: '100%' }} ref={this.container}>
          <MonacoEditor width={width} height={height} {...restProps} />
        </div>
      </div>
    )
  }
}

export default Editor

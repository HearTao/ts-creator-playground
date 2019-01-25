import React, { ComponentType, lazy, Suspense } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

import Header from './header'

import 'modern-normalize/modern-normalize.css'

const Playground = lazy(() => import('./playground'))

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

const LoadingIndicator = styled.div`
  margin: 0 auto;
  margin-top: 1em;
  padding: 8px;
  background-color: rgba(19, 124, 189, 0.1);
  border: 1px solid #137cbd;
  border-radius: 4px;
  color: #137cbd;
`
const App = () => (
  <>
    <GlobalStyle />
    <Header />
    <Suspense fallback={<LoadingIndicator>Equipping ts-creator, don't panic</LoadingIndicator>}>
      <Playground />
    </Suspense>
  </>
)

export default App

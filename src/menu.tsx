import React from 'react'
import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'

const MenuDropdown = styled.div`
  display: none;
  position: absolute;
  top: 5rem;
  z-index: 1;
  padding: 1rem;
`

const MenuContainer = styled.div`
  height: 100%;
  position: relative;

  &:hover {
    & ${MenuDropdown} {
      display: unset;
    }
  }
`

interface Props {
  placeholder: JSX.Element
}

const Menu: React.SFC<Props> = props => (
  <MenuContainer>
    {props.placeholder}
    <Paper component={MenuDropdown}>{props.children}</Paper>
  </MenuContainer>
)

export default Menu

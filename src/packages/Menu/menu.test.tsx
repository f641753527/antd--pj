import React, { ReactElement } from 'react'
import { cleanup, fireEvent, render, RenderResult } from '@testing-library/react'
import Menu, { MenuProps, MenuItem } from './index'

const horizontalMenu: MenuProps = {
  defauleIndex: 3,
  onSelect: jest.fn(),
  className: 'pj-menu'
}

const verticalMenu: MenuProps = {
  mode: 'vertical',
}

function renderMenuByProps(props: MenuProps): ReactElement {
  return (
    <Menu {...props}>
      <MenuItem index={1}>Link1</MenuItem>
      <MenuItem index={2} disabled>Link2</MenuItem>
      <MenuItem index={3}>Link3</MenuItem>
    </Menu>
  )
}


let Wrapper: RenderResult, menuElement: HTMLElement, firstItem: HTMLElement, secondItem: HTMLElement, thirdItem: HTMLElement

describe('test Menu and MenuItem Component corrent rendered', () => {
  beforeEach(() => {
    Wrapper = render(renderMenuByProps(horizontalMenu))
    menuElement = Wrapper.getByTestId('testid')
    firstItem = Wrapper.getByText('Link1')
    secondItem = Wrapper.getByText('Link2')
    thirdItem = Wrapper.getByText('Link3')
  })
  it('Should Menu and Item be Classed', () => {
    expect(menuElement).toHaveClass('menu pj-menu menu-horizontal')
    expect(thirdItem).toHaveClass('is-active')
    expect(secondItem).toHaveClass('is-disabled')
  })
  it('active menuItem change', () => {
    fireEvent.click(firstItem)
    expect(firstItem).toHaveClass('is-active')
    expect(thirdItem).not.toHaveClass('is-active')
    expect(horizontalMenu.onSelect).toBeCalledWith(1)
  })
  it('vertical menu have class', () => {
    cleanup()
    Wrapper = render(renderMenuByProps(verticalMenu))
    menuElement = Wrapper.getByTestId('testid')
    expect(menuElement).toHaveClass('menu-vertical')
  })
})
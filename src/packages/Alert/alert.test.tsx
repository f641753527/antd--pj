import { render, screen, fireEvent, getByText } from "@testing-library/react";
import Alert from './index'

it('Should Alert Component Be Typed', () => {
  render(<Alert data-testid='alert' header='This is Header'/>)

  const AlertComp = screen.getByTestId('alert')

  expect(AlertComp).toHaveClass('alert alert-default')
})

it('Should Alert Component Be Closed', () => {
  render(<Alert data-testid='alert' header='This is Header'/>)

  const AlertComp = screen.getByTestId('alert')

  fireEvent.click(getByText(AlertComp, '关闭'))

  expect(AlertComp).not.toBeVisible()
})

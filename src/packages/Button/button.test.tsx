
import { render, screen } from '@testing-library/react'
import Button from './index'
import { ButtonSize, ButtonType } from './types'

test('button should be disabled', () => {
  render(<Button data-testid='test1' disabled >submit</Button>)

  expect(screen.getByTestId('test1')).toBeDisabled()
})

test('button should be small', () => {
  render(<Button data-testid='test2' size={ButtonSize.Small} >submit</Button>)

  expect(screen.getByTestId('test2')).toHaveClass('btn btn-sm btn-default', { exact: true })
})

test('button should be link', () => {
  render(<Button data-testid='test3' buttonType={ButtonType.Link} >submit</Button>)

  const btn = screen.getByTestId('test3')
  expect(btn).toHaveClass('btn btn-link')
  expect(btn).not.toBeDisabled()
})
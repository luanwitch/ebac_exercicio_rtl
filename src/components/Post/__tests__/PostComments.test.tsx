import { render, screen, fireEvent } from '@testing-library/react'
import PostComments from '../index'

describe('PostComments - Inserção de Comentários', () => {
  test('Deve inserir dois comentários na lista', () => {
    render(<PostComments />)

    const input = screen.getByTestId('input-comentario') as HTMLTextAreaElement
    const button = screen.getByTestId('botao-enviar')

    // Primeiro comentário
    fireEvent.change(input, { target: { value: 'Primeiro comentário' } })
    fireEvent.click(button)

    // Segundo comentário
    fireEvent.change(input, { target: { value: 'Segundo comentário' } })
    fireEvent.click(button)

    // Verificações
    expect(screen.getByText('Primeiro comentário')).toBeInTheDocument()
    expect(screen.getByText('Segundo comentário')).toBeInTheDocument()
    })
})

import { render, screen } from '@testing-library/react'
import Productos from '../pages/productos'

describe('Productos Component', () => {
  test('muestra el título del catálogo', () => {
    render(<Productos />)
    expect(screen.getByText(/Catálogo de Productos/i)).toBeInTheDocument()
  })

  test('renderiza todos los productos del listado', () => {
    render(<Productos />)

    // Verifica que existan los nombres de los productos
    expect(screen.getByText('Teclado Mecánico RGB')).toBeInTheDocument()
    expect(screen.getByText('Mouse Gamer 16000 DPI')).toBeInTheDocument()
    expect(screen.getByText('Auriculares Pro X')).toBeInTheDocument()
    expect(screen.getByText('Silla Gamer RGB')).toBeInTheDocument()

    // Verifica que haya 4 elementos tipo "producto-item"
    const productos = screen.getAllByRole('heading', { level: 3 })
    expect(productos).toHaveLength(4)
  })

  test('cada producto tiene su botón de "Agregar al carrito"', () => {
    render(<Productos />)

    const botones = screen.getAllByRole('button', { name: /Agregar al carrito/i })
    expect(botones).toHaveLength(4)

    // Verifica que los botones se rendericen correctamente
    botones.forEach((btn) => {
      expect(btn).toBeInTheDocument()
    })
  })
})

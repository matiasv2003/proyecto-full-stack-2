import { render, screen } from '@testing-library/react'
import Home from '../pages/home'

describe('Home Component', () => {
  test('muestra el título principal', () => {
    render(<Home />)
    expect(screen.getByText(/Level-Up Gamer/i)).toBeInTheDocument()
  })

  test('muestra el subtítulo descriptivo', () => {
    render(<Home />)
    expect(
      screen.getByText(/Tu tienda definitiva para periféricos/i)
    ).toBeInTheDocument()
  })

  test('renderiza el botón "Ver productos"', () => {
    render(<Home />)
    const boton = screen.getByRole('link', { name: /Ver productos/i })
    expect(boton).toBeInTheDocument()
    expect(boton.getAttribute('href')).toBe('#productos')
  })

  test('renderiza todos los productos del inicio', () => {
    render(<Home />)

    // Verifica que los nombres de los productos aparezcan
    expect(screen.getByText('Teclado Mecánico RGB')).toBeInTheDocument()
    expect(screen.getByText('Auriculares Pro X')).toBeInTheDocument()
    expect(screen.getByText('Mouse Gamer 16000 DPI')).toBeInTheDocument()

    // Verifica la cantidad total
    const productos = screen.getAllByRole('heading', { level: 3 })
    expect(productos).toHaveLength(3)
  })

  test('cada producto tiene botón de "Agregar al carrito"', () => {
    render(<Home />)
    const botones = screen.getAllByRole('button', { name: /Agregar al carrito/i })
    expect(botones).toHaveLength(3)
    botones.forEach((btn) => expect(btn).toBeInTheDocument())
  })
})

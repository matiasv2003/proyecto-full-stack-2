import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Navbar from '../navbar'

// Grupo de pruebas del componente Navbar
describe('Navbar Component', () => {
  test('renderiza el título correctamente', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )

    // Verifica que el título "Level-Up Gamer" se muestre en pantalla
    expect(screen.getByText(/Level-Up Gamer/i)).toBeInTheDocument()
  })

  test('contiene los enlaces Home y Productos', () => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )

    // Busca los enlaces por su texto
    const homeLink = screen.getByText('Home')
    const productosLink = screen.getByText('Productos')

    // Verifica que existan
    expect(homeLink).toBeInTheDocument()
    expect(productosLink).toBeInTheDocument()

    // Verifica que los href sean correctos
    expect(homeLink.getAttribute('href')).toBe('/')
    expect(productosLink.getAttribute('href')).toBe('/productos')
  })
})

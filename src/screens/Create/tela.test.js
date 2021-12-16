import {render, screen} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Formulario from './index'





const MockFormulario = () => {
    return (
        <BrowserRouter>
        <Formulario/>
        </BrowserRouter>
    )

    }

test('testando formulario', async () => {

    render(<MockFormulario/>)
    const nameElement = await screen.findByTestId(/nomeproduto/i)
    expect(nameElement).toBeInTheDocument()

})
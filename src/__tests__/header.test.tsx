import {render, screen} from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Header from '../components/Header'


test('all header components are present', async() => {
    render(<Header/>)
    let getCVButton = screen.getByTestId('getCVButton')
    let logo = screen.getByTestId('logo')
    let profileImg = screen.getByTestId('profileImg')
    expect(getCVButton).toBeEnabled()
    expect(logo).toBeInTheDocument()
    expect(profileImg).toBeInTheDocument()
})
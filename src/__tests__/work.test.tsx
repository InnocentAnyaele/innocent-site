import {render, screen} from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Work from '../components/Work'


test('all work components are present', () => {
    render(<Work/>)
    // let workName = screen.getAllByTestId('workName')
    // let workGithub = screen.getAllByTestId('workGithub')
    // let workAbout = screen.getAllByTestId('workAbout')
    // let workSite = screen.getAllByTestId('workSite')
    // let workImg = screen.getAllByTestId('workImg')
    // expect(workName).toBeInTheDocument()
    // expect(workGithub).toBeInTheDocument()
    // expect(workAbout).toBeInTheDocument()
    // expect(workSite).toBeInTheDocument()
    // expect(workImg).toBeInTheDocument()
})
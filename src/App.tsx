import { RouterProvider } from 'react-router-dom'
import { router } from './presentation/router/router'

export const App = () => {
    return (
        <RouterProvider router={router} />
    )
}

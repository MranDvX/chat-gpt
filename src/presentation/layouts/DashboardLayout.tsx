import { Outlet } from "react-router-dom"

export const DashboardLayout = () => {
    return (
        <>
            <h1>Dahboard</h1>
            <Outlet />
        </>
    )
}

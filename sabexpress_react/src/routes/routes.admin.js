import {AdminLayout} from "../Layouts"
import {LoginAdmin} from "../pages/Admin"

const routesAdmin = [
    {
        path: "/Admin",
        layout: AdminLayout,
        component: LoginAdmin,
    }
]


export default routesAdmin;
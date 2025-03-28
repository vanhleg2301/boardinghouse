import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
	Dashboard,
	HomeLayout,
	Landing,
	Login,
	Logout,
	Register,
} from "./pages";
import { ToastContainer } from "react-toastify";
import RoomManagement from "./pages/RoomManagement";
import BillManagement from "./pages/BillManagement";
import TenantManagement from "./pages/TenantManagement";
import UserDashboard from "./pages/UserDashboard";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		children: [
			{
				index: true,
				element: <Landing />,
			},
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "register",
				element: <Register />,
			},
			{
				path: "dashboard",
				element: <Dashboard />,
			},
			{
				path: "user-dashboard",
				element: <UserDashboard />,
			},
			{
				path: "rooms",
				element: <RoomManagement />,
			},
			{
				path: "bills",
				element: <BillManagement />,
			},
			{
				path: "tenants",
				element: <TenantManagement />,
			},
			{
				path: "logout",
				element: <Logout />,
			},
		],
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router} />
			<ToastContainer position="top-center" />
		</>
	);
}

export default App;

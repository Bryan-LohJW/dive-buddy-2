import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

const RootLayout = () => (
	<>
		<div className="max-h-270 max-w-80 border-4 box-content">
			<Outlet />
			<TanStackRouterDevtools />
		</div>
	</>
)

export const Route = createRootRoute({ component: RootLayout })

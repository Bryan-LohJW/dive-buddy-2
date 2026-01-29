import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

const RootLayout = () => (
	<>
		<div className="h-160 max-w-80 overflow-hidden border-4 box-content relative">
			<Outlet />
			<TanStackRouterDevtools />
		</div>
	</>
)

export const Route = createRootRoute({ component: RootLayout })

import { createFileRoute, useNavigate } from '@tanstack/react-router'

import {
	type FC,
	type PropsWithChildren,
	useState,
	useEffect,
	useRef,
} from 'react'
import Best from '../components/Best'
import NavBar from '../components/NavBar'
import Trainings from '../components/Trainings'
import { type Record } from '../components/Best'
// import Best from '~/components/tabs/Best/Best'
// import Trainings from '~/components/tabs/Training/Trainings'
// import NavBar from '~/components/ui/NavBar'

export const Route = createFileRoute('/home')({
	component: RouteComponent,
})

const INITIAL_PAGE = 1

type PageContentProps = {
	page: number
	index: number
}

const PageContent: FC<PropsWithChildren<PageContentProps>> = ({
	children,
	page,
	index,
}) => {
	if (page !== index) return <></>

	return (
		<main className="h-full">
			<div className="h-160 flex flex-col gap-5 justify-between">
				{children}
				<div className="h-24 flex-shrink-0"></div>
			</div>
		</main>
	)
}

function RouteComponent() {
	const navigate = useNavigate()
	const isFirstRender = useRef(true)
	const [page, setPage] = useState(INITIAL_PAGE)
	const [records, setRecords] = useState<Record[]>([])
	const addRecord = (newRecord: Record) => {
		setRecords((prevRecords) => {
			return [...prevRecords, newRecord]
		})
	}

	useEffect(() => {
		const storedRecords = localStorage.getItem('records')
		if (storedRecords) {
			setRecords(JSON.parse(storedRecords))
		}
	}, [])

	useEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false
			return
		}
		localStorage.setItem('records', JSON.stringify(records))
	}, [records])

	const pageHandler = (pageNo: number) => {
		if (page === pageNo) {
			return
		}
		setPage(pageNo)
	}

	return (
		<>
			<PageContent index={0} page={page}>
				<Best records={records} addRecord={addRecord} />
			</PageContent>
			<PageContent index={1} page={page}>
				<Trainings records={records} />
			</PageContent>
			<PageContent index={2} page={page}>
				<button
					className="w-48 text-white bg-primary h-12 rounded-lg font-extrabold text-xl self-center mt-20"
					onClick={() => {
						navigate({
							to: '/',
						})
						localStorage.clear()
					}}
				>
					Reset
				</button>
			</PageContent>
			<NavBar page={page} pageHandler={pageHandler} />
		</>
	)
}

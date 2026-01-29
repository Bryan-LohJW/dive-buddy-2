import { useEffect, useState } from 'react'
import BestTimer from './BestTimer'
import PastRecords from './PastRecords'

export type Record = {
	id: string
	userId: string
	milliseconds: number
	createdAt: Date
	updatedAt: Date
}

type BestProps = {
	records: Record[]
	addRecord: (newRecord: Record) => void
}

const Best = ({ records, addRecord }: BestProps) => {
	const [time, setTime] = useState(0)
	const [isRunning, setIsRunning] = useState(false)

	useEffect(() => {
		let interval: string | number | NodeJS.Timeout | undefined
		if (isRunning) {
			interval = setInterval(() => setTime((time) => time + 10), 10)
		} else {
			clearInterval(interval)
		}
		return () => clearInterval(interval)
	}, [isRunning])

	const timerToggleHandler = () => {
		setIsRunning((prev) => !prev)
		if (isRunning && time > 0) {
			const newRecord: Record = {
				id: crypto.randomUUID(),
				userId: 'local-user',
				milliseconds: time,
				createdAt: new Date(),
				updatedAt: new Date(),
			}
			void addRecord(newRecord)
		} else {
			setTime(0)
		}
	}
	return (
		<>
			<BestTimer
				timeInMs={time}
				isRunning={isRunning}
				toggleTimerHandler={timerToggleHandler}
			/>
			<PastRecords records={records} />
		</>
	)
}

export default Best

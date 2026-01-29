import type { Record } from './Best'
import Training from './Training'
import { TrainingType } from './Training'

type TrainingsProps = {
	records: Record[]
}

const Trainings = ({ records }: TrainingsProps) => {
	const typeEnums = TrainingType
	let bestRecord = 0
	records.map((record) => {
		if (record.milliseconds > bestRecord) {
			bestRecord = record.milliseconds
		}
	})

	return (
		<>
			<Training
				title={'CO2 Training'}
				description={'Decreasing breathe times'}
				trainingType={typeEnums.CO2}
				record={bestRecord}
			/>
			<Training
				title={'O2 Training'}
				description={'Increasing breath hold times'}
				trainingType={typeEnums.O2}
				record={bestRecord}
			/>
		</>
	)
}

export default Trainings

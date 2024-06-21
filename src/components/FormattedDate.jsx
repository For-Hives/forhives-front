const dateFormatter = new Intl.DateTimeFormat('en-US', {
	year: 'numeric',
	timeZone: 'UTC',
	month: 'short',
	day: 'numeric',
})

export function FormattedDate({ date, ...props }) {
	date = typeof date === 'string' ? new Date(date) : date

	return (
		<time dateTime={date.toISOString()} {...props}>
			{dateFormatter.format(date)}
		</time>
	)
}

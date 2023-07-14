'use client'

import { testActionTwo } from "./comment"

export default function NoSSR() {
	return (
		<form action={testActionTwo}>
			<input type="hidden" name="comment" value="test" />
			<button type="submit" className="button">
				Submit 2
			</button>
		</form>
	)
}

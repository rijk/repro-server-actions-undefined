import { testActionOne } from "@app/actions";
import Client from "./client";

export default function Page() {
	return (
		<div>
			<form action={testActionOne}>
				<input type="hidden" name="comment" value="test" />
				<button type="submit" className="button">
					Submit 1
				</button>
			</form>
			<Client />
		</div>
	)
}
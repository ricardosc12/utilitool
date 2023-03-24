import { A } from "@solidjs/router";


export default function Home() {
	return (
		<main class="text-center mx-auto text-gray-700 p-4 w-screen h-screen flex items-center justify-center">
			<div class="w-28 h-12 bg-slate-600 text-center text-slate-200">
				<A href="/abreviador">Abreviador</A>
			</div>
		</main>
	);
}

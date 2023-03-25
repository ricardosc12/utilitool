import { A } from "@solidjs/router";


export default function Home() {
	return (
		<main class="text-center mx-auto text-gray-700 p-4 w-screen flex items-center justify-center" style="max-height:calc(100vh - 50px)">
			<A href="/abreviador"><div class="btn-base">Abreviador</div></A>
		</main>
	);
}

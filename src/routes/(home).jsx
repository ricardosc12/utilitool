import { A } from "@solidjs/router";


export default function Home() {
	return (
		<main class="flex flex-col text-center mx-auto text-gray-700 p-4 w-screen items-center justify-center" style="max-height:calc(100vh - 50px)">
			<A href="/abreviador"><div class="btn-base">Abreviador</div></A>
			<div class="w-full h-52 bg-slate-600 mt-20">
			<ins class="adsbygoogle"
				style="display:block"
				data-ad-client="ca-pub-9580106986509970"
				data-ad-slot="5848397861"
				data-ad-format="auto"
				data-full-width-responsive="true"></ins>
			</div>
		</main>
	);
}

import { A } from "@solidjs/router";


export default function Home() {
	return (
		<main class="text-center mx-auto text-gray-700 p-4 w-screen flex items-center justify-center" style="max-height:calc(100vh - 50px)">
			<A href="/abreviador"><div class="btn-base">Abreviador</div></A>
			<ins class="adsbygoogle"
				style="display:block"
				data-ad-client="ca-pub-9580106986509970"
				data-ad-slot="5848397861"
				data-ad-format="auto"
				data-adtest="on"
				data-full-width-responsive="true"></ins>
		</main>
	);
}

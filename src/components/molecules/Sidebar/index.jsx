import { A } from "solid-start";

export default function Sidebar() {
    return (
        <nav class="bg-sky-800">
            <ul class="container flex items-center p-3 text-gray-200">
            <li class={`border-b-2 mx-1.5 sm:mx-6`}>
                <A href="/">Home</A>
            </li>
            <li class={`border-b-2 mx-1.5 sm:mx-6`}>
                <A href="/about">About</A>
            </li>
            </ul>
      </nav>
    )
}
import { A } from "solid-start";

export default function Sidebar() {
    return (
        <nav>
            <ul class="container flex items-center p-3 text-gray-200">
            <li class="sm:mx-6">
                <A href="/">Home</A>
            </li>
            </ul>
      </nav>
    )
}
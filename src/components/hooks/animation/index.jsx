import { Motion, Presence } from "@motionone/solid";

export default function AnimationPage({children}) {
    return (
        <Presence exitBeforeEnter>
            <Motion.div
                animate={{ 
                    opacity: [0.5, 1],
                    x: [-50,0]
                }}
                transition={{ duration: 0.25, easing: "ease-in-out" }}
            >
                {children}
            </Motion.div>
        </Presence>
    )
}
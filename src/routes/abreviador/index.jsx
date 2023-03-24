import AbreviadorOrganism from "~/components/organisms/Abreviador";
import AnimationPage from "~/components/hooks/animation";
import { Title } from "solid-start";

export default function AbreviadorPage(){
    return (
        <AnimationPage>
            <Title>Abreviador de nomes</Title>
            <AbreviadorOrganism/>
        </AnimationPage>
        
    )
}
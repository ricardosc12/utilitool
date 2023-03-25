import Abreviator from './components/abreviator'
import style from './style.module.css'

export default function AbreviadorOrganism() {
    return (
        <div class={style.root_abrev}>
            {/* <h2 class='text-slate-100'>Abreviador de nome</h2> */}
            <Abreviator/>
        </div>
    )
}
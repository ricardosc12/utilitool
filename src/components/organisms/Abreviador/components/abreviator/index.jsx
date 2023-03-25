import { createMemo, createSignal, For } from 'solid-js'
import style from './style.module.css'

function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
}

export default function Abreviator(){

    const [ use, setUse ] = createSignal(false)

    const [name, setName] = createSignal('Abraham Lincoln\nPhantom Lancer')

    const [number, setNumer] = createSignal(0)

    const abrev_name = createMemo(()=>{
        return name()
            .split('\n')
            .map(item=>item
                .split(' ')
                .map((letter,index)=>index>number()?`${letter[0]||''}${letter[0]?'.':''}`:letter)
                .join(' '))
    })

    function copy() {
        copyToClipboard(abrev_name().join('\n'))
    }

    function focus(){
        if(!use()) {
            setName('')
            setUse(true)
        }
    }

    function blur(e){
        if(e.relatedTarget?.id == "clear") return
        if(name()=='') {
            setUse(false)
            setName('Abraham Lincoln\nPhantom Lancer')
        }
    }

    function clear(){
        setName('')
        setUse(true)
    }

    return (
        <div class={style.root_abreviator}>
            <div class='flex flex-col gap-3 mb-5'>
                <h2 class='text-slate-100'>Abreviar apartir de: </h2>
                <div class='flex'> 
                    <button onclick={()=>{
                        number()>=0&&setNumer(prev=>prev-1)
                    }} class='btn-rounded'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256"><path fill="currentColor" d="M228 128a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12Z"/></svg></button>
                    <p class='text-slate-100 w-8 mx-3 text-center'>{number()+1}</p>
                    <button onclick={()=>setNumer(prev=>prev+1)} class='btn-rounded'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256"><path fill="currentColor" d="M228 128a12 12 0 0 1-12 12h-76v76a12 12 0 0 1-24 0v-76H40a12 12 0 0 1 0-24h76V40a12 12 0 0 1 24 0v76h76a12 12 0 0 1 12 12Z"/></svg></button>
                </div>
            </div>
            <div class='relative'>
                <div class={style.copy_area}><button id="clear" class='btn-base mt-1 mr-1' onClick={clear}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="m16.24 3.56l4.95 4.94c.78.79.78 2.05 0 2.84L12 20.53a4.008 4.008 0 0 1-5.66 0L2.81 17c-.78-.79-.78-2.05 0-2.84l10.6-10.6c.79-.78 2.05-.78 2.83 0M4.22 15.58l3.54 3.53c.78.79 2.04.79 2.83 0l3.53-3.53l-4.95-4.95l-4.95 4.95Z"/></svg></button></div>
                <textarea onblur={blur} onfocus={focus} class={`${use()?'':style.disable}`} rows={10} value={name()} onInput={(e)=>setName(e.target.value)} type="text" />
            </div>
            <div class={`${style.result_text} ${use()?'':style.disable}`}>
                <div class={style.copy_area}><button class='btn-base mt-1 mr-1' onClick={copy}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M9 18q-.825 0-1.413-.588T7 16V4q0-.825.588-1.413T9 2h9q.825 0 1.413.588T20 4v12q0 .825-.588 1.413T18 18H9Zm-4 4q-.825 0-1.413-.588T3 20V7q0-.425.288-.713T4 6q.425 0 .713.288T5 7v13h10q.425 0 .713.288T16 21q0 .425-.288.713T15 22H5Z"/></svg></button></div>
                <For each={abrev_name()}>
                    {(name)=><p>{name}</p>}
                </For>
            </div>
        </div>
    )
}


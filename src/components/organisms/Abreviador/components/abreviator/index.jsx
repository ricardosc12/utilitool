import { createMemo, createSignal, For } from 'solid-js'
import style from './style.module.css'

function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
}

export default function Abreviator(){

    const [ use, setUse ] = createSignal(false)

    const [name, setName] = createSignal('Abraham Lincoln')

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
            setName('Abraham Lincoln')
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
                <div class={style.copy_area}><button id="clear" class='btn-base mt-1 mr-1' onClick={clear}>limpar</button></div>
                <textarea onblur={blur} onfocus={focus} class={`${use()?'':style.disable}`} rows={10} cols={50} value={name()} onInput={(e)=>setName(e.target.value)} type="text" />
            </div>
            {/* <div>
                Qtd: 
                <input onInput={(e)=>setNumer(parseInt(e.target.value)||0)} type="text" />
            </div> */}
            <div class={`${style.result_text} ${use()?'':style.disable}`}>
                <div class={style.copy_area}><button class='btn-base mt-1 mr-1' onClick={copy}>copiar</button></div>
                <For each={abrev_name()}>
                    {(name)=><p>{name}</p>}
                </For>
            </div>
            {/* <button onClick={copy}>copy</button> */}
        </div>
    )
}


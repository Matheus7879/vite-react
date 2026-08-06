export function Header(props){
    return <div>
        <header className="fixed w-full bg-zinc-900 z-50 text-white">
        <div className="flex border-b pb-3 border-gray-400">
        <div className="pt-5 pl-4">
            <button onClick={() => props.onChange("home")} className={`text-5xl cursor-pointer ${props.page === "home"}`} style={{ fontFamily: 'Undertale' }}>DeepGrounded</button>
        </div>
        <div className="pt-6 pl-[980px]">
            <button onClick={() => props.onChange("download")} className={`text-[18px] border rounded-full p-3 hover:border-gray-300 cursor-pointer hover:bg-zinc-800 font-['Rajdhani']`}>Download</button>
        </div>
        <div className="pt-6 pl-4">
            <button onClick={() => props.onChange("equipe")} className={`text-[18px] border rounded-full p-3 hover:border-gray-300 cursor-pointer hover:bg-zinc-800 font-['Rajdhani']`}>Equipe</button>
        </div>

</div>
</header>




</div>
}
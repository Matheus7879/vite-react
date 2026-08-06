export function DownloadPage(){
    return <div>
        <div className="bg-zinc-900 min-h-screen text-white">

            <div className="pt-28 text-center">

                <h1
                    className="text-5xl"
                    style={{ fontFamily: "Undertale" }}
                >
                    Download
                </h1>

                <p className="text-xl text-gray-300 mt-5 font-['Rajdhani']">
                    Baixe a versão beta de DeepGrounded.
                </p>

                <a
                    href="/downloads/DeepGrounded-Beta.zip"
                    download
                    className="inline-block mt-10 px-8 py-4 rounded-xl bg-gray-700 hover:bg-gray-500 transition text-xl font-semibold"
                >
                    Download Beta
                </a>

                <p className="mt-4 text-gray-400 font-['Rajdhani']">
                    Versão 1.0 Beta • Windows • ? MB
                </p>

            </div>

            <div className="flex justify-center mt-16">

                <video
                    controls
                    poster="/thumb.png"
                    className="w-[750px] rounded-2xl border border-zinc-700 shadow-2xl"
                >
                    <source src="/Trailer.mp4" type="video/mp4" />
                </video>

            </div>

            <div className="mt-20 flex justify-center gap-16">

                <div className="border border-zinc-700 rounded-xl p-6 w-[300px]">
                    <h2 className="text-2xl mb-4">Requisitos mínimos</h2>

                    <p>Windows 10/11</p>
                    <p>Intel Core i3</p>
                    <p>4 GB RAM</p>
                    <p>1 GB Livre</p>
                </div>

                <div className="border border-zinc-700 rounded-xl p-6 w-[300px]">
                    <h2 className="text-2xl mb-4">Está versão contém</h2>

                    <p> Primeiros Mapas</p>
                    <p> Sistema de batalha</p>
                    <p> NPCs</p>
                    <p> Inventário</p>
                    <p> Sistema de Save</p>
                </div>

            </div>

        </div></div>
}
export function Main(){
    return <div className="bg-zinc-900">
  <div className="bg-zinc-900 min-h-screen text-white">

            <div className="flex justify-between items-center px-12 pt-28">

                {/* Texto */}
                <div className="max-w-2xl">

                    <h1
                        className="text-6xl"
                        style={{ fontFamily: "Undertale" }}
                    >
                        DeepGrounded
                    </h1>

                    <p className="text-2xl text-gray-300 font-['Rajdhani'] mt-6 leading-relaxed">
                        DeepGrounded é um RPG inspirado em jogos indies como
                        <span className="text-white"> Undertale</span>,
                        desenvolvido como projeto de Trabalho de Conclusão de Curso
                        por alunos do Técnico em Desenvolvimento de Sistemas.
                    </p>

                    <p className="text-xl text-gray-400 font-['Rajdhani'] mt-5 leading-relaxed">
                        O projeto reúne programação, modelagem 3D, design criativo
                        e desenvolvimento web para criar uma experiência envolvente
                        e original.
                    </p>

                </div>

                {/* Imagem do jogo */}
                <img
                    src="/imagem1.png"
                    alt="DeepGrounded"
                    className="w-[450px] rounded-2xl border border-zinc-700 shadow-2xl"
                />

            </div>

            {/* Trailer */}

            <div className="mt-28 text-center">

                <h2 className="text-4xl mb-8">Trailer</h2>

                <video
                    controls
                    poster="/thumb.png"
                    className="mx-auto w-[850px] rounded-2xl border border-zinc-700 shadow-2xl"
                >
                    <source src="/Trailer.mp4" type="video/mp4" />
                </video>

            </div>

            {/* Tecnologias */}

            <div className="mt-24 pb-20">

                <h2 className="text-4xl text-center mb-10">
                    Tecnologias Utilizadas
                </h2>

                <div className="flex justify-center gap-8 flex-wrap">

                    <div className="border border-zinc-700 rounded-xl p-6 w-48 text-center hover:bg-zinc-800 transition ri-reactjs-fill">
                        
                        <h3 className="mt-4 text-2xl">React</h3>
                    </div>

                    <div className="border border-zinc-700 rounded-xl p-6 w-48 text-center hover:bg-zinc-800 transition ri-tailwind-css-fill">
                        
                        <h3 className="mt-4 text-2xl">Tailwind</h3>
                    </div>

                    <div className="border border-zinc-700 rounded-xl p-6 w-48 text-center hover:bg-zinc-800 transition">
                        🎮
                        <h3 className="mt-4 text-2xl">GameMaker</h3>
                    </div>

                    <div className="border border-zinc-700 rounded-xl p-6 w-48 text-center hover:bg-zinc-800 transition ri-blender-fill">
                        
                        <h3 className="mt-4 text-2xl">Blender</h3>
                    </div>

                </div>

            </div>

        </div>
        </div>
    
}


/*🔹 Tecnologias usadas

Exemplo:

React
Tailwind
Godot
Blender

<video /thumb.png
*/


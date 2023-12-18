import { GoArrowRight } from "react-icons/go";

function Home() {
    return (
        <div className="
        bg-[url('/src/images/bg-img-small.jpg')]
        sm:bg-[url('/src/images/bg-img-big.jpg')] 
        bg-bottom h-screen">
            <div className="h-screen bg-zinc-700/[0.85]">
            <div className="h-screen flex justify-center items-center">
                
                <div className="flex flex-col">
                    <p className="pb-56 text-third-color uppercase">osiągaj lepsze wyniki z naszymi butami</p>
                    <button className="flex justify-center items-center border-2 text-third-color rounded-3xl h-14 shadow-xl shadow-[#404040]-500/50 text-lg"><a className="uppercase font-bold">rozpocznij zakupy</a><GoArrowRight className="pl-1 text-2xl" /></button>
                </div></div>
            </div>
        </div>
    )
}

export default Home;


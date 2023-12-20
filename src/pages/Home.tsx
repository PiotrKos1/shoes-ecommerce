import { GoArrowRight } from "react-icons/go";

function Home() {
  return (
    <div
      className="
        bg-[url('/src/images/bg-img-big.jpg')]
        bg-bottom
        h-screen">
      <div className='flex items-center justify-center h-screen bg-zinc-700/[0.85]'>
        {/* <div className='flex justify-center'> */}
          <div className='flex flex-col items-center'>
            <div className="text-center pb-40">
            <p className='text-third-color uppercase text-2xl font-bold'>
              komfort.
            </p>
            <p className='text-third-color uppercase text-2xl font-bold'>
              wygoda.
            </p>
            <p className='text-third-color uppercase text-2xl font-bold'>
              lepsze wyniki.
            </p>
            <p className='text-third-color uppercase text-l'>
              *Rozpocznij zakupy i zyskaj nawet do 20% zniżki
            </p>
            
            </div>
            <div><button className='p-5 flex justify-center items-center border-2 text-third-color rounded-3xl h-14 shadow-xl shadow-[#404040]-500/50 text-lg animate-bounce'>
              <a href="/shop" className='uppercase font-bold'>rozpocznij zakupy</a>
              <GoArrowRight className='pl-1 text-2xl' />
            </button>
            </div>
          </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Home;

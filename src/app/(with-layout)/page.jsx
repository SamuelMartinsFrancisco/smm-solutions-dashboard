export default function Empty() {
  return (
    <div className='flex-1 h-[100vh]'>
      <header>
        <h1 className='text-2xl font-bold text-center pt-5 pb-5'>
          Dashboard Administrativo
        </h1>
      </header>
      <div className='pl-[5%] pr-[5%] pt-[5%]'>
        <p>
          * Através deste dashboard você poderá gerenciar alguns dos conteúdos que serão apresentado em seu website público. 
          Experimente acessar algum dos ítens no menu lateral; cada um deles está relacionado à uma página específica do website público.
        </p>
      </div>
    </div>
  );
}
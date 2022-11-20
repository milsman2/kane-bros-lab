export default function Home() {
  return (
    <div className='bg-black text-white min-h-screen flex flex-col flex-1'>
        <nav className='flex justify-between flex-wrap content-center bg-amber-800 p-4 sticky top-0'>
          <div className='flex items-center text-white mr-6'>
            <span className="font-semibold text-xl tracking-tight">Kane Bros. Lab</span>
          </div>
        </nav>
        <div className='flex flex-column flex-1 items-center justify-center'>
          Hi!
        </div>
        <footer className='flex flex-wrap justify-center items-center p-4 bg-black mt-auto text-white'>
          <a className='text-white ml-5 href=https://blog.kanebroslab.com'>Brought to you by Kane Bros. Lab</a>
        </footer>
    </div>
  )
}
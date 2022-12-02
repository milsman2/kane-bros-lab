import { ReactElement } from "react"

const Header = (): ReactElement => {
    return (
        <nav className='flex justify-between flex-wrap content-center bg-amber-800 p-4 sticky top-0'>
            <div className='flex items-center text-white mr-6'>
                <span className="font-semibold text-xl tracking-tight">Kane Bros. Lab</span>
            </div>
        </nav>
    )
}

export default Header
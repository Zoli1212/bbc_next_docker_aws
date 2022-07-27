import React, { useContext} from 'react'
import Link from 'next/link'

export const Header = () => {
  return (
    <div className='container mx-auto px-10 mb-8'>
        <div className='border-b w-full inline-block border-red-400 py-8'>
            <div className="md:float-left block">
                <Link href='/'>
                    <span className="cursor-pointer font-bold text-4xl text-white">
                        GraphCMS
                    </span>

                </Link>

            </div>
            <div className='hidden'>

            </div>

        </div>
    </div>
  )
}

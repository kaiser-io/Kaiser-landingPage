"use client";

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import hamburgerMenuIcon from 'public/images/mini-pics/global/hamburger.svg'
import { pagesData } from '@/configs/appConfig';
import useHeaderMobileVM from '../viewmodel/headerMobileVm';

/**
 * @todo because we don't have any other pages except home page so we added index === 0 in the line to enable current page color, after we have added other pages we should remove this statement
 */
export default function HeaderMobile() {
  const {isShowMenu, pathname, handleClickHamburgerMenu} = useHeaderMobileVM()
  const pagesLink = pagesData.map((pageData, index) => {
    return <Link key={pageData.title} href={`${pageData.route}`} className={`${index === 0 && pageData.route === pathname ? 'text-pink' : '' } px-4`}>
      {pageData.title}
    </Link>
  })
  return (
    <div className='fixed w-full left-0 top-0 items-start flex justify-between z-10 md:hidden'>
      <div className={`w-[60%] flex flex-col justify-between h-screen bg-body-black py-10 pl-7 transition-all ${isShowMenu ? 'translate-x-[0]': 'translate-x-[-200%]' }`}>
        <nav className="text-xl flex flex-col items-start gap-8 w-full">
          { pagesLink }
        </nav>
        <div className="border-b w-7 border-pink inline-block">
          <span>EN</span>
        </div>
      </div>
      <button onClick={handleClickHamburgerMenu} className='pt-6 pr-6'>
          <Image 
            alt='hamburger menu' 
            width={30} 
            height={20} 
            src={hamburgerMenuIcon} 
            />
      </button>
    </div>
  )
}

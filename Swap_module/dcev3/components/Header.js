

import React, { useContext, useEffect } from 'react'
// import logo from '../assets/logo.png'
import Image from 'next/image'
import { AiOutlineSearch } from 'react-icons/ai'
import { ProjectContext } from '../context/ProjectContext'

const styles = {
  container: 'flex w-screen h-16 bg- px-24 py-3 mb-5 fixed',
  leftHeader: 'flex flex-1',
  logo: 'object-cover cursor-pointer',
  searchWrapper: 'flex flex-1',
  searchInputContainer:
    'text-black items-center flex  flex-1 -ml-64 border border-gray-400 mr-64 hover:bg-[#1E2123] duration-300 p-3 rounded-lg',
  searchIcon: 'text-gray-400 text-3xl mr-3',
  searchInputWrapper: 'text-gray-400 text-lg w-full',
  searchInput: 'bg-transparent outline-none w-full',
  rightHeader: 'flex items-center justify-end text-black gap-8',
  menuItem: 'cursor-pointer font-bold hover:text-green-500 duration-300',
  heading:'text-black',
  buttonAccent: `bg-[#ccc] border border-[#163256] hover:border-[#234169] h-full rounded-2xl flex items-center justify-center text-[#4F90EA]`,
  buttonPadding: `p-2`,
}

const Header = () => {
  const {
    connectWallet,
    signOut,
    currentAccount,
    isAuthenticated,
    formattedAccount,
    swapTokens,
  } = useContext(ProjectContext)

  return (
    <div className={styles.container}>
      <div className={styles.leftHeader}>
        {/* <Image src={logo} height={100} width={100} className={styles.logo} /> */}
        <p className={styles.heading}>DECENTRALIZED CRYPTO EXCHANGE</p>

      </div>
      <div className={styles.searchWrapper}>
      </div>
      <div className={styles.rightHeader}>
        <div className={styles.menuItem} >
          <button><a href='http://localhost:3001/'>Send Crypto</a></button>
        </div>

        {isAuthenticated && (
          <>
            <div className={styles.menuItem}>{formattedAccount}</div>
            <div className={styles.menuItem} onClick={() => signOut()}>
              Logout
            </div>
          </>
        )}

        {!isAuthenticated && (
          <div className={styles.menuItem} onClick={() => connectWallet()}>
            Login
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
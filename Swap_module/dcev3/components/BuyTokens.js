import React, { useContext } from 'react'
import { ProjectContext } from '../context/ProjectContext'

const styles = {
  inputAmount: `w-1/2 flex items-center justify-center border border-black rounded-lg p-2 bg-white mt-6 text-black placeholder:text-black`,
  formContainer: `flex items-center`,
  select: `w-1/2 flex items-center justify-center border border-black rounded-lg p-2 bg-white mt-6 text-black placeholder:text-black`,
  options: `w-1/2 flex items-center justify-center border border-black rounded-lg p-2 bg-[#2172E5] mt-6 text-black placeholder:text-black`,
  noticeCTA: 'bg-[#2172E5] my-2 rounded-2xl py-6 px-8 text-xl font-semibold flex items-center justify-center cursor-pointer border border-[#2172E5] hover:border-[#234169]',

}

const BuyTokens = () => {
  const {
    isAuthenticated,
    setAmount,
    mint,
    setCoinSelect,
    coinSelect,
    amount,
    toCoin,
    setToCoin,
  } = useContext(ProjectContext)
  return (
    <form className={styles.formContainer}>
      <div className='flex h-full w-full flex-col items-center'>
        <select
           className={styles.select}
           value={coinSelect}
           onChange={e => setCoinSelect(e.target.value)}
        >
          <option className={styles.options} value='ETH'>
            ETH
          </option>
          <option className={styles.options} value='BTC'>
            BTC
          </option>
          <option className={styles.options} value='DOGE'>
            DOGE
          </option>
          <option className={styles.options} value='USDC'>
            USDC
          </option>
          <option className={styles.options} value='FILE'>
            FILE
          </option>

        </select>
        <select
          className={styles.select}
          value={toCoin}
          onChange={e => setToCoin(e.target.value)}
        >
          <option className={styles.options} value='DOGE'>
            DOGE
          </option>
          <option className={styles.options} value='USDC'>
            USDC
          </option>
          <option className={styles.options} value='FILE'>
            FILE
          </option>
          <option className={styles.options} value='BTC'>
            BTC
          </option>
        </select>
        <input
          placeholder='Amount...'
          className={styles.inputAmount}
          type='text'
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />

        <button
          className={styles.noticeCTA}
          type='button'
          disabled={!isAuthenticated}
          onClick={() => mint()}
        >
          Swap
        </button>
      </div>
    </form>
    
  )
}

export default BuyTokens
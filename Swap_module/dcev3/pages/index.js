import Header  from '../components/Header'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { AiOutlinePlus } from 'react-icons/ai'
// import PortfolioChart from '../components/PortfolioChart'
import BuyTokens from '../components/BuyTokens'
import Asset from '../components/Asset'
import { useState, useContext } from 'react'
import axios from 'axios'
import { ProjectContext } from '../context/ProjectContext'

const styles = {
  wrapper: 'w-screen h-screen flex flex-col',
  mainContainer: 'w-2/3 h-full m-auto flex mt-16',
  leftMain: 'flex flex-col w-3/4 h-full  p-6 overflow-y-scroll',
  portfolioAmountContainer: 'flex flex-col ',
  portfolioAmount: 'text--black text-4xl',
  portfolioPercent: 'text-white font-bold text-sm',
  pastHour: 'text-gray-400',
  chartContainer:
    'text-5xl flex justify-center w-full h-1/3 text-white mt-11 mb-11',
  buyingPowerContainer:
    'w-full border-t mb-24 border-b h-16  flex item-center item-center p-4',
  buyingPowerTitle: 'text-white font-bolder text-lg',
  buyingPowerAmount: 'text-white font-bolder text-xl',
  notice: 'flex border  mx-11 my-4 p-5 flex-col flex-1',
  noticeContainer: 'flex-1',
  noticeTitle: 'text-gray-500',
  noticeMessage: 'text-white font-bold',
  noticeCTA: 'font-bold text-green-500 cursor-pointer mt-5',
  rightMain:
    'flex flex-col flex-1 h-4/5 bg-[#ffff] mt-6 rounded-lg overflow-y-scroll noScroll',
  rightMainItem: 'flex items-center text-white p-5 border-b border-[#30363b]',
  ItemTitle: 'flex-1 font-bold',
  moreOptions: 'cursor-pointer text-xl',
  buttoncenter:'text-white font-bold '
} 

export default function Home({ coins }) {
  // const [myCoins] = useState([...coins.slice(0, 8)])
  const { balance, swapError } = useContext(ProjectContext)
   return (
    <div className={styles.wrapper}>
      <Header/>
      <div className={styles.mainContainer}>
        <div className={styles.leftMain}>
          <div className={styles.portfolioAmountContainer}>
            <div className={styles.portfolioAmount}> {balance} ETH </div>
            <div className={styles.portfolioPercent}>
              <span className={styles.pastHour}>Past Hour</span>
            </div>
          </div>
          <div>
            {/* <div className={styles.chartContainer}>
              <PortfolioChart />
            </div> */}
          </div>
          <div className={styles.notice}>
            <div className={styles.noticeContainer}>
              <div className={styles.noticeMessage}>
                Swap Crypto Funds
              </div>
              <BuyTokens />
            </div>
          </div>
          {/* <Notice /> */}
        </div>
        
        {/* <div className={styles.rightMain}>
          <div className={styles.rightMainItem}>
            <div className={styles.ItemTitle}>Crypto Currencies</div>

            <BiDotsHorizontalRounded className={styles.moreOptions} />
          </div>
          {myCoins.map(coin => {
            let price = parseFloat(coin.price)
            price = price.toFixed(2)

            return <Asset key={coin.uuid} coin={coin} price={price} />
          })}

          <div className={styles.rightMainItem}>
            <div className={styles.ItemTitle}>Lists</div>
            <AiOutlinePlus className={styles.moreOptions} />
          </div>
        </div> */}

        
      </div>
    </div>
  )
}


// export const getStaticProps = async () => {
//   const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       'tiers[0]': '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '10',
//       offset: '0'
//     },
//     headers: {
//       'X-RapidAPI-Key': process.env.COIN_RANKING_KEY,
//       'X-RapidAPI-Host':   process.env.COIN_RANKING_HOST,

//     }
//   };
  

//   const res = await axios.request(options)
//   const coins = res.data.data.coins

//   return {
//     props: { coins },
//   }
// }
'use client'

// components/WhereToBuyToken.jsx
import { useState } from 'react'
import Image from 'next/image'
import styles from './WhereToBuyToken.module.css'

const dexes = [
  { name: 'Uniswap', chain: 'ETH Chain', logo: '🦄', address: '0x2e85ae1C47602f7927bCabc2Ff99C40aA222aE15' },
  { name: 'Base', chain: 'Base Chain', logo: '🔵', address: '0x02454a97A8372f3A760A033D8b39E67D73BD6d87' },
  { name: 'PancakeSwap', chain: 'BSC Chain', logo: null, address: '0x6D6bA21E4C4b29CA7Bfa1c344Ba1E35B8DaE7205' },
]

const cexes = [
  { name: 'BitMart', emoji: '🅱', href: 'https://www.bitmart.com' },
  { name: 'MEXC Global', emoji: '📊', href: 'https://www.mexc.com' },
  { name: 'DigiFinex', emoji: '💹', href: 'https://www.digifinex.com' },
  { name: 'ProBit', emoji: '🔷', href: 'https://www.probit.com' },
  { name: 'LATOKEN', emoji: '🔶', href: 'https://latoken.com' },
]

function CopyButton({ address }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(address).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }
  return (
    <button onClick={handleCopy} className={`${styles.copyBtn} ${copied ? styles.copied : ''}`}>
      {copied ? '✓ COPIED' : 'COPY'}
    </button>
  )
}

export default function WhereToBuyToken() {
  return (
    <div className={styles.section}>
      <div className={styles.eyebrow}>$KATA Token is a Web3 Product of Katana Inu</div>
      <h2 className={styles.title}>Where Can I Buy <span>$KATA</span> Tokens?</h2>
      <p className={styles.subtitle}>
        <strong>PancakeSwap and Uniswap</strong> are the easiest platforms for purchasing $KATA.
        Copy the correct contract address for your chain, paste it into the DEX, choose your amount, and swap.{' '}
        <strong>Do not send funds directly to the contract address</strong> — you will lose your tokens.
      </p>
      <div className={styles.accessBanner}>
        ✦ With $KATA you get full access to Web3, NFTs &amp; the Play2Earn Ecosystem ✦
      </div>

      <div className={styles.dexCards}>
        {dexes.map((dex) => (
          <div key={dex.name} className={styles.dexCard}>
            <div className={styles.dexHeader}>
              <div className={styles.dexName}>{dex.name}</div>
              {dex.logo ? (
                <span className={styles.dexEmoji}>{dex.logo}</span>
              ) : (
                <Image
                  src="https://s2.coinmarketcap.com/static/img/coins/64x64/7186.png"
                  alt="PancakeSwap"
                  width={36}
                  height={36}
                  className={styles.dexImg}
                  unoptimized
                />
              )}
            </div>
            <div className={styles.dexBadge}>{dex.chain}</div>
            <div className={styles.contractLabel}>Contract Address</div>
            <div className={styles.contractWrap}>
              <span className={styles.contractAddr}>{dex.address}</span>
              <CopyButton address={dex.address} />
            </div>
          </div>
        ))}
      </div>

      <div className={styles.cexSection}>
        <div className={styles.cexLabel}>Also Available On</div>
        <div className={styles.cexLogos}>
          {cexes.map((cex) => (
            <a key={cex.name} href={cex.href} target="_blank" rel="noreferrer" className={styles.cexPill}>
              {cex.emoji} {cex.name}
            </a>
          ))}
        </div>
      </div>

      <div className={styles.risk}>
        <div className={styles.riskTitle}>⚠️ Risk Warning</div>
        <p className={styles.riskText}>
          Cryptocurrency trading is subject to high market risk. Please always trade cautiously.
          Katana Inu is not responsible for any trading losses. You are solely responsible for
          determining whether any investment or transaction is appropriate for you.
        </p>
        <p className={styles.riskNote}>Nothing herein shall be construed as financial advice.</p>
      </div>
    </div>
  )
}

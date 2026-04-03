// components/KataP2ESection.jsx
// Usage: import KataP2ESection from '@/components/KataP2ESection'

'use client'

import { useState, useRef } from 'react'
import styles from './KataP2ESection.module.css'

const steps = [
  { n: 1, text: <><strong>Download the Game</strong> via the Web3 Game Launcher</> },
  { n: 2, text: <><strong>Create an Account</strong> in the game</> },
  { n: 3, text: <>Buy some <strong>$KATA tokens</strong> — the more you hold, the higher your reward multiplier</> },
  { n: 4, text: <>Buy some <strong>NFTs</strong> — the more you hold, the higher your reward multiplier</> },
  { n: 5, text: <>Reach at least <strong>Level 5</strong> — the minimum required to participate in rewards</> },
  { n: 6, text: null }, // handled separately for the click action
]

const xpSources = [
  { label: 'Win a match', val: '+200 XP' },
  { label: 'Kill', val: '+100 XP' },
  { label: 'Assist kill', val: '+35 XP' },
  { label: 'Daily quest completion', val: '+250 XP' },
  { label: 'Survive a match without dying', val: '+500 XP' },
  { label: 'Heal teammate (max 1x/min)', val: '+30 XP' },
  { label: 'Victory Royale (1st Place)', val: '+1,000 XP' },
  { label: 'Consecutive match bonus', val: '+100 XP' },
  { label: 'Play tutorial (1x)', val: '+500 XP' },
  { label: 'Survival time', val: '+1 XP / 5 sec' },
  { label: 'Top 5 for 1 day', val: '+1,000 XP' },
  { label: 'Top 5–10 for 1 week', val: '+500 XP' },
  { label: 'Death penalty', val: '–5 XP', red: true },
]

const tiers = [
  { name: 'Bronze', range: 'Lvl 5–9', share: '5%', cls: styles.tierBronze },
  { name: 'Silver', range: 'Lvl 10–19', share: '15%', cls: styles.tierSilver },
  { name: 'Gold', range: 'Lvl 20–29', share: '20%', cls: styles.tierGold },
  { name: 'Platinum', range: 'Lvl 30–39', share: '25%', cls: styles.tierPlat },
  { name: 'Diamond', range: 'Lvl 40–50', share: '35%', cls: styles.tierDiamond },
]

const nftMultipliers = [
  { nft: '1 NFT (Bronze)', mult: '×1.0', kata: '$100' },
  { nft: '3 NFTs (Silver)', mult: '×1.1', kata: '$300' },
  { nft: '5+ NFTs (Gold)', mult: '×1.2', kata: '$500' },
  { nft: '10+ NFTs (Platinum)', mult: '×1.3', kata: '$2,000' },
  { nft: '20+ NFTs (Diamond)', mult: '×1.5', kata: '$5,000' },
]

export default function KataP2ESection() {
  const [open, setOpen] = useState(false)
  const expandRef = useRef(null)

  const scrollAndOpen = () => {
    expandRef.current?.scrollIntoView({ behavior: 'smooth' })
    setTimeout(() => { if (!open) setOpen(true) }, 400)
  }

  return (
    <div className={styles.wrapper}>

      {/* Eyebrow */}
      <div className={styles.eyebrow}>Web3 Ecosystem</div>

      {/* Title */}
      <h1 className={styles.mainTitle}>
        How the <span>$KATA Token</span> Works<br />in Our Game &amp; Its Utilities
      </h1>

      {/* Launch badge */}
      <div className={styles.launchBadge}>
        🪙 Launched December 2021 &nbsp;·&nbsp;
        <a href="https://coinmarketcap.com/currencies/katana-inu/" target="_blank" rel="noreferrer">
          View on CoinMarketCap ↗
        </a>
      </div>

      {/* ── HOW P2E WORKS ── */}
      <div className={styles.p2eSteps}>
        <div className={styles.p2eTitle}>
          So, How Does <span>Play2Earn</span> Work?
        </div>
        <div className={styles.p2eLine} />

        <div className={styles.stepsList}>
          {steps.slice(0, 5).map(({ n, text }) => (
            <div key={n} className={styles.stepRow}>
              <div className={styles.stepNum}>{n}</div>
              <div className={styles.stepText}>{text}</div>
            </div>
          ))}
          <div className={styles.stepRow}>
            <div className={styles.stepNum}>6</div>
            <div className={styles.stepText}>
              <strong>Play &amp; have fun</strong> — level up, take down opponents, earn XP and more.{' '}
              <span className={styles.openLink} onClick={scrollAndOpen}>
                ↓ Open below for more information
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── PURCHASE BLOCK ── */}
      <div className={styles.infoBlock}>
        <div className={styles.infoBlockTitle}>💱 How to Get <span>$KATA</span> Tokens</div>
        <div className={styles.infoText}>
          <p><strong>$KATA</strong> is available on several leading exchanges and decentralized platforms. You can purchase it on <strong>MEXC, Bitmart, Pancakeswap, Uniswap</strong>, and more.</p>
          <p>To get started: load <strong>USDT</strong> onto your wallet or exchange account, then swap or buy $KATA directly. If you&apos;re new to decentralized exchanges, simply search <em>&ldquo;How to buy on Uniswap&rdquo;</em> or <em>&ldquo;How to buy on PancakeSwap&rdquo;</em> on YouTube.</p>
          <p className={styles.availableOn}><span>$KATA</span> available on: MEXC · Bitmart · Pancakeswap · Uniswap · and more</p>
        </div>
      </div>

      {/* ── NFT BLOCK ── */}
      <div className={styles.infoBlock}>
        <div className={styles.infoBlockTitle}>
          🖼️ How to Buy NFTs <span className={styles.cosmeticsTag}>(Cosmetics)</span>
        </div>
        <div className={styles.infoText}>
          <p>In the Web3 ecosystem, you can <strong>purchase or mint Katana Inu NFTs</strong> — including weapons, characters, and other cosmetic items — directly on our official minting page:</p>
          <p>
            <a href="https://mint.katanainu.com/" target="_blank" rel="noreferrer" className={styles.mintLink}>
              🛒 mint.katanainu.com ↗
            </a>
          </p>
          <p>Please note that the availability of NFTs on the mint page may vary — not all collections may be listed at any given time. We regularly update the selection, so check back often.</p>
          <p>Looking for a specific NFT or want to buy from other players? You can also find Katana Inu NFTs on secondary marketplaces such as <strong>OpenSea</strong>, where community members trade their items directly on the open market.</p>
        </div>
      </div>

      {/* ── P2E ECOSYSTEM ── */}
      <div className={styles.infoBlock}>
        <div className={styles.infoBlockTitle}>⚔️ Play &amp; Earn Ecosystem</div>
        <div className={styles.infoText}>
          <p>We have a <strong>Play&amp;Earn (P2E) ecosystem</strong> that rewards you with <strong>$KATA tokens</strong> while you play — but to start earning, you need to <strong>hold tokens first</strong>. The more you hold, the more you can earn.</p>
          <p>Additionally, you need to hold <strong>Katana Inu NFTs</strong>. The more NFTs you hold, the higher your earning multiplier.</p>
          <p>Your earnings also depend on your <strong>playtime, Level, and XP</strong>. We distribute $KATA into different pools based on skill tiers — camping or being inactive won&apos;t earn tokens. You need to <strong>actively play, fight, and improve</strong>.</p>
          <p className={styles.disclaimer}>All numbers and balances are subject to change as we test and scale the system.</p>
        </div>
      </div>

      {/* ── REWARD BLOCK ── */}
      <div className={styles.infoBlock}>
        <div className={styles.infoBlockTitle}>🌐 Claiming Your Rewards</div>
        <div className={styles.infoText}>
          <p>View and claim your rewards at <a href="https://reward.katanainu.com" target="_blank" rel="noreferrer">reward.katanainu.com</a> after connecting via <strong>Thirdweb</strong>.</p>
        </div>
        <div className={styles.stepsList} style={{ marginTop: '16px' }}>
          {[
            <><strong>Download the Game Launcher (Katana Inu Web3)</strong> and create your Katana Inu account in the game.</>,
            <>In-game, <strong>log in or register via Thirdweb</strong> using your email.</>,
            <>Visit <a href="https://reward.katanainu.com" target="_blank" rel="noreferrer">reward.katanainu.com</a> and <strong>log in with the same Thirdweb email</strong> to see your rewards.</>,
          ].map((text, i) => (
            <div key={i} className={styles.stepRow}>
              <div className={styles.stepNum}>{i + 1}</div>
              <div className={styles.stepText}>{text}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── WARNING ── */}
      <div className={styles.warning}>
        <div className={styles.warningTitle}>⚠️ Please Be Aware</div>
        <div className={styles.warningText}>
          All features are currently <strong>still in development</strong> and may have bugs or require balancing. Contact us via{' '}
          <a href="https://t.me/katanainu" target="_blank" rel="noreferrer">Telegram</a> or{' '}
          <a href="https://discord.gg/BedhH7CXGz" target="_blank" rel="noreferrer" className={styles.discordLink}>Discord</a> — we&apos;ll look into it immediately.
        </div>
      </div>

      {/* ── EXPAND BUTTON ── */}
      <button ref={expandRef} className={styles.expandBtn} onClick={() => setOpen(!open)}>
        <span className={styles.expandLabel}>
          📖 How the <span>$KATA</span> P2E System Exactly Works — Click to Read &nbsp;
          <span className={styles.openTag}>(Open)</span>
        </span>
        <span className={`${styles.expandIcon} ${open ? styles.expandIconOpen : ''}`}>+</span>
      </button>

      {/* ── SYSTEM DETAIL ── */}
      {open && (
        <div className={styles.systemDetail}>

          <div className={styles.sysTitle}>
            The <span>$KATA P2E</span> Reward System<br />
            <span className={styles.sysTitleSub}>( HOW IT WORKS )</span>
          </div>

          {/* Purchase inside */}
          <div className={styles.sysSection} style={{ background: 'rgba(240,165,0,0.04)', border: '1px solid rgba(240,165,0,0.15)', borderRadius: '10px', padding: '18px 20px' }}>
            <div className={styles.sysSectionTitle} style={{ borderBottom: 'none', marginBottom: '10px' }}>💱 How to Purchase $KATA</div>
            <div className={styles.infoText}>
              <p>$KATA is listed on <strong>MEXC, Bitmart, PancakeSwap, Uniswap</strong>. Load <strong>USDT</strong> onto your wallet and swap directly. Search YouTube for step-by-step guides.</p>
            </div>
          </div>

          {/* Eligibility */}
          <div className={styles.sysSection}>
            <div className={styles.sysSectionTitle}>1. Eligibility</div>
            <div className={styles.infoText}>Minimum <strong>Level 5</strong> + at least <strong>one Katana Inu NFT</strong>.</div>
          </div>

          {/* XP */}
          <div className={styles.sysSection}>
            <div className={styles.sysSectionTitle}>2. XP Sources</div>
            <div className={styles.xpList}>
              {xpSources.map(({ label, val, red }) => (
                <div key={label} className={`${styles.xpItem} ${red ? styles.xpItemRed : ''}`}>
                  {label}
                  <span className={`${styles.xpVal} ${red ? styles.xpValRed : ''}`}>{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tiers */}
          <div className={styles.sysSection}>
            <div className={styles.sysSectionTitle}>3. Reward Tiers</div>
            <div className={styles.tiers}>
              {tiers.map(({ name, range, share, cls }) => (
                <div key={name} className={`${styles.tierCard} ${cls}`}>
                  <div className={styles.tierName}>{name}</div>
                  <div className={styles.tierRange}>{range}</div>
                  <div className={styles.tierShare}>{share}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RP */}
          <div className={styles.sysSection}>
            <div className={styles.sysSectionTitle}>4. Reward Points (RP)</div>
            <div className={styles.xpList}>
              <div className={styles.xpItem}>Kill <span className={styles.xpVal}>+10 RP</span></div>
              <div className={styles.xpItem}>Death <span className={styles.xpValRed}>–5 RP</span></div>
              <div className={styles.xpItem}>Playtime (max 5h/day) <span className={styles.xpVal}>+20 RP/hour</span></div>
            </div>
            <p className={styles.rpNote}>Your RP determines your share of your tier&apos;s daily pool. <strong>More RP = bigger share.</strong></p>
          </div>

          {/* NFT Multipliers */}
          <div className={styles.sysSection}>
            <div className={styles.sysSectionTitle}>5. NFT &amp; Token Multipliers</div>
            <table className={styles.sysTable}>
              <thead>
                <tr><th>NFT Holdings</th><th>Multiplier</th><th>Min. $KATA</th></tr>
              </thead>
              <tbody>
                {nftMultipliers.map(({ nft, mult, kata }) => (
                  <tr key={nft}>
                    <td>{nft}</td>
                    <td><strong>{mult}</strong></td>
                    <td>{kata}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className={styles.multNote}>After Level 30: +10% · After Level 40: +20% · After Level 50: +30%</p>
          </div>

          {/* Disclaimer */}
          <div className={styles.sysDisclaimer}>
            This is a base document. All numbers will be thoroughly tested and balanced. Reach out via{' '}
            <a href="https://t.me/katanainu" target="_blank" rel="noreferrer">Telegram</a> or{' '}
            <a href="https://discord.gg/BedhH7CXGz" target="_blank" rel="noreferrer" className={styles.discordLink}>Discord</a>.
          </div>

        </div>
      )}

    </div>
  )
}

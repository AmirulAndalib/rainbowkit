import { type Chain, getDefaultConfig } from '@rainbow-me/rainbowkit';
import {
  argentWallet,
  backpackWallet,
  berasigWallet,
  bestWallet,
  bifrostWallet,
  binanceWallet,
  bitgetWallet,
  bitskiWallet,
  bitverseWallet,
  bloomWallet,
  bybitWallet,
  clvWallet,
  coin98Wallet,
  coinbaseWallet,
  compassWallet,
  coreWallet,
  dawnWallet,
  desigWallet,
  enkryptWallet,
  foxWallet,
  frameWallet,
  frontierWallet,
  gateWallet,
  imTokenWallet,
  iopayWallet,
  kaiaWallet,
  kaikasWallet,
  krakenWallet,
  kresusWallet,
  ledgerWallet,
  magicEdenWallet,
  metaMaskWallet,
  mewWallet,
  nestWallet,
  oktoWallet,
  okxWallet,
  omniWallet,
  oneInchWallet,
  oneKeyWallet,
  paraSwapWallet,
  phantomWallet,
  rabbyWallet,
  rainbowWallet,
  ramperWallet,
  roninWallet,
  safeWallet,
  safeheronWallet,
  safepalWallet,
  subWallet,
  tahoWallet,
  talismanWallet,
  tokenPocketWallet,
  tokenaryWallet,
  trustWallet,
  uniswapWallet,
  valoraWallet,
  walletConnectWallet,
  wigwamWallet,
  xdefiWallet,
  zealWallet,
  zerionWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { publicActions } from 'viem';
import {
  apeChain,
  arbitrum,
  arbitrumSepolia,
  avalancheFuji,
  base,
  baseSepolia,
  berachain,
  berachainTestnetbArtio,
  blast,
  blastSepolia,
  bsc,
  bscTestnet,
  curtis,
  degen,
  gnosis,
  gravity,
  holesky,
  ink,
  inkSepolia,
  linea,
  lineaSepolia,
  mainnet,
  optimism,
  optimismSepolia,
  polygon,
  polygonMumbai,
  sanko,
  scroll,
  scrollSepolia,
  sepolia,
  unichain,
  unichainSepolia,
  zksync,
  zora,
  zoraSepolia,
} from 'wagmi/chains';

const projectId =
  process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID ?? 'YOUR_PROJECT_ID';

const avalanche = {
  id: 43_114,
  name: 'Avalanche',
  iconUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png',
  iconBackground: '#fff',
  nativeCurrency: { name: 'Avalanche', symbol: 'AVAX', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://api.avax.network/ext/bc/C/rpc'] },
  },
  blockExplorers: {
    default: { name: 'SnowTrace', url: 'https://snowtrace.io' },
  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 11_907_934,
    },
  },
} as const satisfies Chain;

// Enable Smart Wallet and EOA
// Testing `preference` type
coinbaseWallet.preference = 'all';

export const config = getDefaultConfig({
  appName: 'RainbowKit Demo',
  projectId,
  chains: [
    mainnet,
    base,
    optimism,
    arbitrum,
    polygon,
    apeChain,
    avalanche,
    berachain,
    blast,
    bsc,
    degen,
    gravity,
    ink,
    sanko,
    unichain,
    zora,
    linea,
    gnosis,
    scroll,
    zksync,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true'
      ? [
          sepolia,
          holesky,
          arbitrumSepolia,
          avalancheFuji,
          baseSepolia,
          berachainTestnetbArtio,
          blastSepolia,
          bscTestnet,
          curtis,
          inkSepolia,
          lineaSepolia,
          optimismSepolia,
          polygonMumbai,
          scrollSepolia,
          unichainSepolia,
          zoraSepolia,
        ]
      : []),
  ],
  wallets: [
    {
      groupName: 'Popular',
      wallets: [
        safeWallet,
        rainbowWallet,
        coinbaseWallet,
        metaMaskWallet,
        walletConnectWallet,
      ],
    },
    {
      groupName: 'Other',
      wallets: [
        argentWallet,
        backpackWallet,
        berasigWallet,
        bestWallet,
        bifrostWallet,
        binanceWallet,
        bitgetWallet,
        bitskiWallet,
        bitverseWallet,
        bloomWallet,
        bybitWallet,
        clvWallet,
        coin98Wallet,
        compassWallet,
        coreWallet,
        dawnWallet,
        desigWallet,
        enkryptWallet,
        foxWallet,
        frameWallet,
        frontierWallet,
        gateWallet,
        imTokenWallet,
        iopayWallet,
        kaiaWallet,
        kaikasWallet,
        krakenWallet,
        kresusWallet,
        ledgerWallet,
        magicEdenWallet,
        mewWallet,
        nestWallet,
        oktoWallet,
        okxWallet,
        omniWallet,
        oneInchWallet,
        oneKeyWallet,
        paraSwapWallet,
        phantomWallet,
        rabbyWallet,
        ramperWallet,
        roninWallet,
        safeheronWallet,
        safepalWallet,
        subWallet,
        tahoWallet,
        talismanWallet,
        tokenPocketWallet,
        tokenaryWallet,
        trustWallet,
        uniswapWallet,
        valoraWallet,
        wigwamWallet,
        xdefiWallet,
        zealWallet,
        zerionWallet,
      ],
    },
  ],
  ssr: true,
});

export const publicClient = config.getClient().extend(publicActions);

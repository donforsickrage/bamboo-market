'use client';

import { WalletProvider, ConnectionProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import TokenSwap from './TokenSwap';
import '@solana/wallet-adapter-react-ui/styles.css';

export default function App() {
  const wallets = [new PhantomWalletAdapter()];
  
  return (
    <ConnectionProvider endpoint="https://api.mainnet-beta.solana.com">
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <main className="flex min-h-screen flex-col items-center justify-center p-24 space-y-8">
            <h1 className="text-4xl font-bold">Solana Swap App</h1>
            <WalletMultiButton />
            <TokenSwap />
          </main>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
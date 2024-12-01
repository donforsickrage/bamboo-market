'use client';

import React from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';

export default function TokenSwap() {
  const { connection } = useConnection();
  const { connected } = useWallet();

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Swap Tokens</h2>
      <button 
        className="w-full bg-blue-600 text-white p-3 rounded-lg"
      >
        {connected ? 'Ready to Swap' : 'Connect Wallet First'}
      </button>
    </div>
  );
}
"use client"

import { useState } from "react"
import { WalletConnect } from "@/components/wallet-connect"
import { SwapInterface } from "@/components/swap-interface"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from 'lucide-react'

export default function Home() {
  const [walletInfo, setWalletInfo] = useState(null)

  return (
    <main className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center justify-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-teal-400">Tabi Router Web3</h1>
          <p className="text-gray-400 text-center max-w-xl">
            Swap tokens on PulseChain testnet using the Tabi 2.1 Router
          </p>
        </div>

        <div className="mb-6">
          <WalletConnect onConnect={setWalletInfo} walletInfo={walletInfo} />
        </div>

        {walletInfo ? (
          <div className="space-y-6">
            <Alert className="bg-teal-900/20 border-teal-800 text-teal-400">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Connected to PulseChain Testnet. This application uses the Tabi 2.1 Router for secure and reliable
                transactions.
              </AlertDescription>
            </Alert>
            <div className="flex justify-center">
              <SwapInterface walletInfo={walletInfo} />
            </div>
          </div>
        ) : (
          <div className="bg-gray-800 border-gray-700 rounded-lg p-6">
            <p className="text-center text-gray-400">Please connect your wallet to use the swap interface</p>
          </div>
        )}
      </div>
    </main>
  )
}

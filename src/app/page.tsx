export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-teal-400 mb-4">Tabi Router Web3</h1>
      <p className="text-gray-400 text-center max-w-xl mb-8">
        Swap tokens on PulseChain testnet using the Tabi 2.1 Router
      </p>
      
      <div className="w-full max-w-md bg-gray-800 border border-gray-700 rounded-lg p-6">
        <div className="text-center">
          <button className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-2 px-4 rounded-lg">
            Connect Wallet
          </button>
          <p className="mt-4 text-gray-400">
            Please connect your wallet to use the swap interface
          </p>
        </div>
      </div>
      
      <div className="mt-8 text-sm text-gray-500">
        <p>This is a simplified test page. Full functionality coming soon.</p>
      </div>
    </div>
  );
}

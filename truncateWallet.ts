export function useTruncateWallet(wallet: string) {
  return `${wallet.slice(0, 6)}...${wallet.slice(-4)}`
}

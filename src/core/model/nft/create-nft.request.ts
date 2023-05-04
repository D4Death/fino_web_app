interface CreateNFTRequest {
  name: string;
  symbol: string;
  descriptions?: string;
  images: string[];
  totalSupply: number;
  basePrice: number;
  marketPrice: number;
}

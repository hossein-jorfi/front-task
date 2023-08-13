export type categpryType = {
  name: string;
  description: string;
  id: number;
  image: string;
};

export type productType = {
  image: string;
  id: number;
  price: number;
  title: string;
  count?: number;
};

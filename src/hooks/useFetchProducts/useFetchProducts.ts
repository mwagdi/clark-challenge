import { useState } from 'react';

import { Product } from '@/types';

export const useFetchProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  return {
    products,
    error,
    loading,
  };
};

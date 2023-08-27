import { useEffect, useState } from 'react';

import { Product } from '@/types';

export const useFetchProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          'https://my-json-server.typicode.com/mwagdi/clark-challenge/products',
        );
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error(String(err)));
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return {
    products,
    error,
    loading,
  };
};

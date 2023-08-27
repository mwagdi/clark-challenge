import { useEffect, useState } from 'react';

import { Product } from '@/types';

export const useFetchProductDetails = (id: number) => {
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [error, setError] = useState<Error | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchProductDetails = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://my-json-server.typicode.com/mwagdi/clark-challenge/products/${id}`,
        );
        if (!response.ok) {
          throw new Error('Failed to fetch product');
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error(String(err)));
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, []);

  return {
    product,
    error,
    loading,
  };
};

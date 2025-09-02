import { QueryClient } from '@tanstack/react-query';

export const createQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000,
        gcTime: 10 * 60 * 1000,
        retry: 1,
        refetchOnWindowFocus: false,
      },
    },
  });
};

export const queryKeys = {
  auth: ['auth'],
  user: (id: string) => ['user', id],
  users: ['users'],
} as const;
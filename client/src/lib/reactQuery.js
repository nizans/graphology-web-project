import { AuthContext } from 'context/authContext';
import { useContext } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
const defualtQuerySetttings = {
  staleTime: 1000 * 60 * 15,
  retry: false,
};

const defultMutationSettings = query => {
  const queryClient = new useQueryClient();
  return {
    onSuccess: () => {
      queryClient.invalidateQueries(query);
    },
  };
};

export function useFetchData(apiRequest) {
  const { query, url, options, settings } = apiRequest;
  return useQuery(query, () => _fetch(url, options), settings || defualtQuerySetttings);
}

export function useMutateData(apiRequest) {
  const { query, url, options, settings } = apiRequest;
  return useMutation(
    query,
    args => _fetch(args.uri ? url + '/' + args.uri : url, args.body ? { ...options, body: args.body } : options),
    settings || defultMutationSettings(query)
  );
}

export const _fetch = async (url, options) => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

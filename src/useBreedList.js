import { useState, useEffect } from 'react';
import fetchBreedList from "./fetchBreedList";

const localCache = {};
export default function useBreedList(animal) {
  const results = useQuery({
    queryKey: ["breedList", animal],
    queryFn: fetchBreedList,
  });

  return [results?.data?.breeds ?? [], results.status];
}

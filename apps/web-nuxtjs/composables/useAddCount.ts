export function useAddCount(num: number) {
  const count = ref(num + 1);

  return { count };
}

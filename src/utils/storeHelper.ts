import { useCommonStore } from '@/store/common';

export default function isClientOr(...params: boolean[]) {
  const { isClient } = useCommonStore();

  params.push(isClient);

  return params.includes(true);
}

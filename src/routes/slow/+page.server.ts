import type { PageServerLoad } from './$types';

export const load = (async () => {
  await new Promise(r => setTimeout(r, 500));
  return {};
}) satisfies PageServerLoad;

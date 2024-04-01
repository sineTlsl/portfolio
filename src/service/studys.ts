import { readFile } from 'fs/promises';
import path from 'path';
import { cache } from 'react';
import { Study } from '@/types/study';

/** 스터디 정보 불러오기 */
export const getAllStudys = cache(async () => {
  const filePath = path.join(process.cwd(), 'data', 'studys.json');
  const studys = await readFile(filePath, 'utf-8').then<Study[]>(JSON.parse);

  return studys;
});

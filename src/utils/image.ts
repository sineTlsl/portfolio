/** 이미지 형식이 gif 일 땐, 이미지 최적화를 false로 하기 위해 boolean 타입으로 반환해주는 함수  */
export const isGif = (src?: string): boolean => {
  const extension = src?.split('.').pop()?.toLowerCase();

  return extension === 'gif';
};

import { v1, v4 } from 'uuid';

const createKey = (): string => v1();

const createKeys = (count: number): string[] => (
  Array.from({ length: count }).map(() => v4())
);

export {
  createKey,
  createKeys,
};

export const safelyPath = (path: string) => {
  if (path[0] !== '/') path = `/${path}`;
  return path;
};

export const isSamePaths = (a: string, b: string, isSafe = false) => {
  if (!isSafe) return safelyPath(a) === safelyPath(b);
  return a === b;
};

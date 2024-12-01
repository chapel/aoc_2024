function getLists(input: string) {
  const reg = /(\d+)\s+(\d+)/g;
  return input
    .split("\n")
    .map((line) => {
      const [_, first, second] = line.matchAll(reg).next().value || [];
      return [Number(first), Number(second)];
    })
    .reduce(
      (lists, line) => {
        lists.left.push(line[0]);
        lists.right.push(line[1]);
        return lists;
      },
      { left: [] as number[], right: [] as number[] }
    );
}

export function part1(input: string): number {
  const { left, right } = getLists(input);

  left.sort();
  right.sort();

  let total = 0;
  for (let i = 0; i < left.length; i += 1) {
    total += Math.abs(left[i] - right[i]);
  }

  return total;
}

export function part2(input: string): number {
  const { left, right } = getLists(input);
  const total = left.reduce((total, lItem) => {
    total += lItem * right.filter((rItem) => lItem === rItem).length;
    return total;
  }, 0);
  return total;
}

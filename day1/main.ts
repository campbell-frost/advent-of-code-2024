const input: string = await Deno.readTextFile("input.txt");
// part 1
const result = input.split("\n")
  .map(line => line.split("   "))
  .reduce<[number[], number[]]>(
    ([a1, a2], [c1, c2]) =>
      [[...a1, Number(c1)], [...a2, Number(c2)]],
    [[], []]
  )
  .map(arr => arr.sort())
  .reduce((a, c, index) =>
    index === 0 ? c : c.map(val => Math.abs(val * a.reduce((a, v) => (v === val ? a + 1 : a), 0)))
  )
  .reduce((a, c) => a + c);

console.log(result);

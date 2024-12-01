import { assertEquals } from "@std/assert";
import { part1, part2 } from "./main.ts";

const example = `
3   4
4   3
2   5
1   3
3   9
3   3`.trim();

const input = await Deno.readTextFile("./input.txt");

Deno.test("Part 1", async (t) => {
  await t.step("Example Input", () => {
    assertEquals(part1(example), 11);
  });

  await t.step("Input", () => {
    assertEquals(part1(input), 2166959);
  });
});

Deno.test("Part 2", async (t) => {
  await t.step("Example Input", () => {
    assertEquals(part2(example), 31);
  });

  await t.step("Input", () => {
    assertEquals(part2(input), 23741109);
  });
});

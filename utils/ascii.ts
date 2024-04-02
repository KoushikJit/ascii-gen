import { popoulateBigFontList } from "./populateFont";

let bigFontList: string[] = [];
export const alphabetsChars = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  " ",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
];

export function getBigCharacterFromIndex(indexArray: number[]) {
  if (!bigFontList || bigFontList.length <= 0) {
    popoulateBigFontList(bigFontList);
  }

  const line = [];
  const startIndex = 0 * 11;
  const endIndex = startIndex + 11;

  for (let i = 0; i < 11; i++) {
    for (let index = 0; index < indexArray.length; index++) {
      const element = indexArray[index];
      line.push(bigFontList[i + element * 11]);
      if (index < indexArray.length - 1) {
        line.push("*");
      }
    }
    line.push("\n");
  }
  console.log(line);
  return line.join(""); // Remove the trailing newline
}

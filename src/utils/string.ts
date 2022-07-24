export const ucFirst = (text: string): string => text
    .charAt(0).toUpperCase() + text.slice(1).toLocaleLowerCase();

export const ucFirstLetter = (text: string): string => {
    let str: string = ""

    text.split('_').forEach(el => {
      str += ucFirst(el)
      str += " "
    });

    return str.trim()
  }
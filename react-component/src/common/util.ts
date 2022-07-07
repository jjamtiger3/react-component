export const Util = {
    insertAt: (value: string, character: string, pos: number) => {
      const arrValue: string[] = value.split('');
      arrValue.splice(pos, 0, character);
      return arrValue.join('');
    },
    removeAt: (value: string, pos: number) => {
      const arrValue: string[] = value.split('');
      arrValue.splice(pos, 1).join('');
      return arrValue.join('');
    },
    replaceAt: (value: string, index: number, character: string) => {
      const lastPos: number = index + character.length;
      return value.substr(0, index) + character + value.substr(lastPos);
    },
    _parseHTML: (strElem: any) => {
      const tmpDiv = document.createElement('div');
      tmpDiv.innerHTML = strElem;
      return tmpDiv.firstElementChild;
    }
  }
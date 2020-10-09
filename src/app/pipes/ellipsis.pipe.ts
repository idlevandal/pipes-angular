import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  // transform(value: string, max: number): unknown {
  //   return value && value.length > max ? `${value.slice(0, max)}...` : value;
  // }

  // http://codebuckets.com/2018/01/23/angular-pipe-to-truncate-text-to-the-nearest-whole-word/

  transform(value: string, length: number): string {
    // make allowance for longer words at the end of the sentence.
    const biggestWord = 10;
    if(typeof value === "undefined") return value;
    if(value.length <= length) return value;

    //.. truncate to about correct length
    let truncatedText = value.slice(0, length + biggestWord);

    //.. now nibble ends till correct length
    while (truncatedText.length > length) {
        let lastSpace = truncatedText.lastIndexOf(" ");
        if(lastSpace === -1) break;
        truncatedText = truncatedText.slice(0, lastSpace).replace(/[!,.?;:]$/, '');
    };
   return `${truncatedText}...`;
  }

}

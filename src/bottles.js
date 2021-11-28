export default function (start, end) {
  if (start === undefined && end === undefined) {
    start = 99;
    end = 0;
  }

  end = end === undefined ? start - 1 : end - 1;

  const output = [];

  do {
    const plural = start > 1 ? 's' : '';
    const next = start - 1;
    const nextPlural = next > 1 ? 's' : '';
    const take = start > 1 ? 'one' : 'it';

    switch (next) {
      case -1:
        output.push(`No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.
`);
        break;
      case 0:
        output.push(`1 bottle of beer on the wall, 1 bottle of beer.
Take it down and pass it around, no more bottles of beer on the wall.
`);
        break;
      default:
        output.push(`${start} bottle${plural} of beer on the wall, ${start} bottle${plural} of beer.
Take ${take} down and pass it around, ${next} bottle${nextPlural} of beer on the wall.
`);
        break;
    }

    start--;
  } while (end < start);
  
  return output.join('\n');
}

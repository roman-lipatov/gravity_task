const BASE_URL = 'https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new';

export async function getNumber() {
  let request = await fetch(BASE_URL);
  return request.text();
}

(async function compare() {
  let number1 = parseInt(await getNumber());
  let number2 = parseInt (await getNumber());

  if ((number1 % 2 === 0) && (number2 % 2 === 0)) {
    console.log('success\n', number1, number2);
    return true;
    } else {
    console.log('error');
    await compare();
  }
})();

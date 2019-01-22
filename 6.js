function countChar(str, symbol){
    let string = 'BoBBBs';
    symbol = 'B';
    str = string;
    let result = 0;
    for (let N = 0; N < str.length; N++)
    result += 1 * (str.charAt(N) == symbol ? 1 : 0);
    console.log(result + '-' + symbol);
}
countChar();



function isEven(N){
    if(N == 0) return true;
    if(N == 1) return false;
    return isEven(N - 2 * (N > 0 ? 1 : -1));
}
console.log(isEven(-4));

//Условный оператор ? используется в 4-ой строке для проверки на отрицательные числа.
//В случае ввода отрицательного значения, в итоге, за счет умножения на -1, позволяет получить значение 0 или 1.
 
   




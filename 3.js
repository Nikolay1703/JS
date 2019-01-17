const x = '#';
const y = ' ';
const a = x + y;
const b = y + x;
for (let countre = 1; countre < 9; countre++) {
    if (countre % 2 == 0)
    console.log(b+b+b+b)
    else
    console.log(a+a+a+a);
}

/*Чтобы увеличить количество строк,необходимо увеличить число повторений цикла.
  Чтобы увеличить количество столбцов, необходимо в console.log (строки 7,9) добавить переменные b и a соответственно.*/






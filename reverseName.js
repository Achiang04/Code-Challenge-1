function reverseMyName(str) {
    // put your code here
    let tampungan = "";
    for (let i = str.length - 1; i >= 0; i--){
        tampungan += str[i];
    }

    return tampungan
}

const Test = (fun, result) => console.log(reverseMyName(fun) === result)

Test("A", "A")
Test("Michael Jackson","noskcaJ leahciM")
Test("Alvian Zachry Faturrahman", "namharrutaF yrhcaZ naivlA")
Test("", "")
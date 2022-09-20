function isPrime(n)
{
    // Biến cờ hiệu
    var flag = true;

    // Nếu n bé hơn 2 tức là không phải số nguyên tố
    if (n < 2){
        flag = false;
    }
    else{
        // lặp từ 2 tới n-1
        for (var i = 2; i <= Math.sqrt(n); i++)
        {
            if (n % i == 0){
                flag = false;
                break;
            }
        }
    }

    // Kiểm tra biến flag
    if (flag == true){
        result = n + " là số nguyên tố <br/>";
    }
    else{
        result = n + " không phải là số nguyên tố <br/>";
    }
    document.getElementById('result').innerHTML=result;
}
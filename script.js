let digits = [document.getElementById("1"), document.getElementById("2")]
digits.forEach((digit, index) => {
    let digitError=[]
    digit.addEventListener('keyup', () => digitsCheck(digit.value, digitError))
    
})
 function digitsCheck(digit, digitError) {
  let x = digit.split("")[digit.length-1]
  let fun = x => (x==" " || isNaN(x)) && digitError.push()
  fun(x)
 }

//my code from codewars
 function sumStrings(a,b) { 
  
    let asplit = a.split("").reverse();
    let bsplit = b.split("").reverse();
    let bigger = asplit.length > bsplit.length ? asplit.length : bsplit.length
    let sum = []
    for(let i=0; i< bigger; i++) {
        if(typeof asplit[i] === 'string' && typeof bsplit[i]==='string') {
            sum.push(parseInt(asplit[i])+parseInt(bsplit[i]))
        } else {
            sum.push(typeof asplit[i] ==='string' ? parseInt(asplit[i]) : parseInt(bsplit[i]))
        }
    }
    sum = sum.map(x => x.toString())
    for(let j=0; j<sum.length-1; j++) {
        if(sum[j]>9) {
            sum[j+1] = parseInt(sum[j+1])
            sum[j+1] +=parseInt(sum[j][0])
            sum[j+1] = sum[j+1].toString()
           
            sum[j] = sum[j][1]
        } 
    }
    let res2 = []
    let count = ''
    let res = sum.reverse()
  if(res[0]==0) {
  
    res.shift()
  }
    console.log(res)
    return res.join("")
   
}

document.getElementById("calculate").addEventListener("click", (e) => {
    e.preventDefault();
    console.log(sumStrings(digits[0].value, digits[1].value))
})
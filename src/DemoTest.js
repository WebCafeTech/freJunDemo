
let a = 10

const findEvenOdd = () => {
  if(a%2 == 0)
  .then((res)=> console.log("Even num", res))
  else{
    console.log("Odd numbe")
  }
}

const fineEvenOdd=(a) = new Promise((res, rej)=>{
    a%2 == 0 ? res('true') : rej('false')
})

fineEvenOdd(10).then(console.log("Even num")).catch(console.error("Odd num")


let d,c
a=[1,3,5,7]
b=[5,3,7,7]

for(a[i]=0;a[i]<4,a[i]++)
{
    
 for(b[i]=0;b[i]<4,b[i]++) {
  d = a[i]
  c  = b[i]

   if(a[i] == b[i])
   console.log("True")
   else{
    console.log("false")
   }
}
}

for(i=0;i<a.length;i++) {
    for(j=0;j<b[i].length;j++) {
        a[i] == b[j]
        ? console.log("True")
        : return(0)
    }
}
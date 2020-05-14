function shopping(job1, job2) {
  const buyIceCream = job1 || job2
  const buy50Tv = job1 && job2
  // const buy32Tv = !!(job1 ^ job2) // bitwise xor
  const buy32Tv = job1 != job2
  const stayHealthy = !buyIceCream // unary operator

  return { buyIceCream, buy50Tv , buy32Tv, stayHealthy }
}

/* Output:
{
  buyIceCream: true,
  buy50Tv: true,
  buy32Tv: false,
  stayHealthy: false
}
*/
console.log(shopping(true, true))
/* Output: 
{
  buyIceCream: true,
  buy50Tv: false,
  buy32Tv: true,
  stayHealthy: false
}
*/
console.log(shopping(true, false))
/* Output:
{
  buyIceCream: true,
  buy50Tv: false,
  buy32Tv: true,
  stayHealthy: false
}
*/
console.log(shopping(false, true))
/* Output:
{
  buyIceCream: false,
  buy50Tv: false,
  buy32Tv: false,
  stayHealthy: true
}
*/
console.log(shopping(false, false))
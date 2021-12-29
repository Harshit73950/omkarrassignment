html>
    <body>
        <script src="nth gp.js"></script>
    </body>
</html>


function Nth_of_GP(a, r, N) 
{ 
    // using formula to find 
    // the Nth term 
    // TN = a1 * r(N-1) 
    return( a * Math.floor(Math.pow(r, N - 1)) ); 
       
} 
   
// Driver code 
  
    // starting number 
    let a = 2; 
       
    // Common ratio 
    let r = 3; 
       
    // N th term to be find 
    let N = 5; 
       
    // Display the output 
    document.write("The "+ N +"th term of the series is : "
        + Nth_of_GP(a, r, N)); 
   
  
// This code is contributed by Surbhi Tyagi
 
</script>
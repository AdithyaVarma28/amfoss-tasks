const userInput=require('readline');
const Input=userInput.createInterface({
    input:process.stdin,
    output:process.stdout
});
function diamond(n) {
    n=Math.ceil(n/2);
    for(let i=1;i<=n;i++) {
        let line = '';
        for(let y=1;y<=n-i;y++) {
            line+=" ";
        }
        for(let x=1;x<2*i;x++) {
            line+="*";
        }
        console.log(line);
    }
    for(let i=n-1;i>=1;i--) {
        let line="";
        for(let y=1;y<=n-i;y++) {
            line+=" ";
        }
        for(let x=1;x<2*i;x++) {
            line+="*";
        }
        console.log(line);
    }
}
Input.question('Enter the number n: ',(input)=>{
    const n=parseInt(input);
    diamond(n);
    Input.close();
});

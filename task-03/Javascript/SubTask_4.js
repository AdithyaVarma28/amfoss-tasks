const fs=require('fs');
const input='input.txt';
const output='output.txt';
try {
    let n=fs.readFileSync(input,'utf8');
    n=parseInt(n, 10);
    n=Math.ceil(n/2);
    for(let i=1;i<=n;i++) {
        let line = '';
        for(let y=1;y<=n-i;y++) {
            line+=" ";
        }
        for(let x=1;x<2*i;x++) {
            line+="*";
        }
        fs.appendFileSync(output,line+'\n');
    }
    for(let i=n-1;i>=1;i--) {
        let line="";
        for(let y=1;y<=n-i;y++) {
            line+=" ";
        }
        for(let x=1;x<2*i;x++) {
            line+="*";
        }
        fs.appendFileSync(output,line+'\n');   
    }
} 
catch(err) {
    console.error(err.message);
}
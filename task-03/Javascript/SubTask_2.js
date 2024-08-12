const fs=require('fs');
const input='input.txt';
const output='output.txt';
try {
    const data=fs.readFileSync(input,'utf8');
    fs.writeFileSync(output,data);  
} 
catch(err) {
    console.error(err.message);
}

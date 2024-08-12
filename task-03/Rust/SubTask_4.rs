use std::fs::File;
use std::io::{self,Read,Write,OpenOptions};
use std::f64;

fn main()->io::Result<()> {
    let mut input=File::open("input.txt")?;
    let mut data=String::new();
    input.read_to_string(&mut data)?;
    let n:usize=(data.trim().parse::<f64>().unwrap()/2.0).ceil() as usize;
    let mut output=OpenOptions::new()
        .write(true)
        .append(true)
        .open("output.txt")?;
    for i in 1..=n {
        for _ in 1..=n-i {
            write!(output," ")?;
        }
        for _ in 1..=2*i-1 {
            write!(output,"*")?;
        }
        writeln!(output)?;
    }
    
    for i in (1..n).rev() {
        for _ in 1..=n-i {
            write!(output," ")?;
        }
        for _ in 1..=2*i-1 {
            write!(output,"*")?;
        }
        writeln!(output)?;
    }
    Ok(())
}

use std::fs::File;
use std::io::{self,Read,Write};

fn main()->io::Result<()> {
    let mut input=File::open("input.txt")?;
    let mut data=String::new();
    input.read_to_string(&mut data)?;
    let mut output=File::create("output.txt")?;
    output.write_all(data.as_bytes())?;
    Ok(())
}

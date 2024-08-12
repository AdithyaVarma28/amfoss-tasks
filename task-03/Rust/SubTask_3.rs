use std::io::{self,Write};

fn main() {
    let mut input=String::new();
    print!("Enter the number n: ");
    io::stdout().flush().unwrap(); 
    io::stdin().read_line(&mut input).unwrap();
    let n:usize=input.trim().parse().unwrap();
    let n=(n as f64/2.0).ceil() as usize;
    for i in 1..=n {
        for _ in 1..=n-i {
            print!(" ");
        }
        for _ in 1..=2*i-1 {
            print!("*");
        }
        println!();
    }
    for i in (1..n).rev() {
        for _ in 1..=n-i {
            print!(" ");
        }
        for _ in 1..=2*i-1 {
            print!("*");
        }
        println!();
    }
}

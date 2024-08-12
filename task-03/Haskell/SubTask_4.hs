import System.IO
import Control.Monad (forM_)

main::IO ()
main=do
    input<-readFile "input.txt"
    let num=(read input::Int)
    let n=ceiling(fromIntegral num/2.0)
    forM_ [1..n] $ \i -> do
        forM_ [1..(n-i)] $ \_ -> do
            appendFile "output.txt" " "
        forM_ [1..(2*i-1)] $ \_ -> do
            appendFile "output.txt" "*"
        appendFile "output.txt" "\n"
    forM_ (reverse [1..(n-1)]) $ \i -> do
        forM_ [1..(n-i)] $ \_ -> do
            appendFile "output.txt" " "
        forM_ [1..(2*i-1)] $ \_ -> do
            appendFile "output.txt" "*"
        appendFile "output.txt" "\n"
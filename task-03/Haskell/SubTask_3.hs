import Control.Monad (forM_)

main::IO ()
main=do
    putStrLn "Enter the number n: "
    input<-getLine
    let num=(read input::Int)
    let n=ceiling(fromIntegral num/2.0)
    forM_ [1..n] $ \i -> do
        forM_ [1..(n-i)] $ \_ -> do
            putStr " "
        forM_ [1..(2*i-1)] $ \_ -> do
            putStr "*"
        putStrLn ""
    forM_ (reverse [1..(n-1)]) $ \i -> do
        forM_ [1..(n-i)] $ \_ -> do
            putStr " "
        forM_ [1..(2*i-1)] $ \_ -> do
            putStr "*"
        putStrLn ""

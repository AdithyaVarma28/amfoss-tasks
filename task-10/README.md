# Operation Pixel Merge

The task was relatively easy for me since I had some familiarity with Matlab from my first year. The most time-consuming part was integrating the algorithm I had with the implementation using OpenCV and Pillow. YouTube, GeeksforGeeks, and the provided documentation were very helpful in completing the task.

## Approach

First, I converted each image into an array with each element representing a pixel. Then, I traversed through the arrays to check if any pixel was not white using **OpenCV**. If an image was completely white, I skipped it. I added the non-white pixel to the blank image and drew lines connecting the colored pixel from the previous pixel using **Pillow**(stored the position and color of previous pixel using global variable).
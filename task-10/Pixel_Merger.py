from PIL import Image,ImageDraw
import numpy as np
import cv2
import os

output=np.zeros((512,512,3),dtype='uint8')
output[:]=255,255,255

prev_position=None
prev_color=None

def Pixel_Merger(path):
    global output,prev_position,prev_color
    image_bgr=cv2.imread(path)
    image_rgb=cv2.cvtColor(image_bgr,cv2.COLOR_BGR2RGB)
    if np.all(image_rgb==[255,255,255]): 
        prev_position=None
        prev_color=None
        return
    for i in range(image_rgb.shape[0]):
        for j in range(image_rgb.shape[1]):
            if not np.array_equal(image_rgb[i,j],[255,255,255]):
                output[i,j]=image_rgb[i,j]
                if(prev_position,prev_color)!=(None,None):
                    img=Image.fromarray(output)
                    draw=ImageDraw.Draw(img)
                    draw.line([prev_position,(j,i)],fill=tuple(prev_color),width=3)
                    output[:]=np.array(img)
                prev_color=image_rgb[i,j]
                prev_position=(j,i)

def file_number(file):
    file=file.replace(".png","")
    number=file.split(" ")
    return int(number[1])

if __name__=='__main__':
    image_files=os.listdir('assets')
    sorted_images=sorted(image_files,key=file_number)
    for file in sorted_images:
        Pixel_Merger('assets/'+file)
    output_image=Image.fromarray(output)
    output_image.show()
    output_image.save('output_image.jpg')
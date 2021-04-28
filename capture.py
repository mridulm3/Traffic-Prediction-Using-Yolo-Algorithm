import cv2
import os
import numpy as np


cam = cv2.VideoCapture(r'C:\Users\MRIDUL\Desktop\B.tech project\video1.avi')#access your webcam
folder=input("Enter a value: ")#asks for folder name
inpath=r'C:\Users\MRIDUL\Desktop\B.tech project\dataset2\ '+folder#new path to be created
os.mkdir(inpath)#making new folder
os.chdir(inpath)#changing directory to the new folder created
img_counter = 0
while True:
    ret, frame = cam.read()#reading single frame per iteration, frame is saved in variable frame
    
    if ret:
        gray = cv2.cvtColor(frame,cv2.COLOR_BGR2GRAY)
        img_name = folder+"{}.jpg".format(img_counter)#image name to save imafolder.. goes like c0,c1,c2... 0,1,2.. calues of image counter
        cv2.imwrite(img_name, gray)#saving image with img name
        print("{} written!".format(img_name))
        img_counter += 1#incrementing value
        cv2.imshow("test", frame)#showing image
        if cv2.waitKey(9) &0XFF == ord('x'):
            break
    else:
        break       
        
cam.release()#realease the camera
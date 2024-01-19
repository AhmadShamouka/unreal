from flask import Flask, request

import os
import cvzone
import cv2
from cvzone.PoseModule import PoseDetector




        
        
     
        
      
       
   
        detector = PoseDetector()

        cap = cv2.VideoCapture(0)

        cv2.namedWindow("image", cv2.WINDOW_NORMAL)
        while True:
            success, img = cap.read()
            img = detector.findPose(img, draw=False)
            lmList, bboxInfo = detector.findPosition(img, draw=False, bboxWithHands=False)
            if lmList:
                lm11 = lmList[11][0:2]
                lm12 = lmList[12][0:2]
            
            imgShirt = cv2.imread(os.path.join(image_path, listShirts[0]), cv2.IMREAD_UNCHANGED)

            height, width, _ = imgShirt.shape
            
            fixedRatio = height / 192
            shirtRatioHeightWidth = height / width
            widthOfShirt = int((lm11[0] - lm12[0]) * fixedRatio)
            heightOfShirt = int(widthOfShirt * shirtRatioHeightWidth)
            currentScale = (lm11[0] - lm12[0]) / 190

            offset = int(44 * currentScale), int(48 * currentScale)
            imgShirt = cv2.resize(imgShirt, (widthOfShirt, heightOfShirt))
            
            img = cvzone.overlayPNG(img, imgShirt, (lm12[0] - offset[0], lm12[1] - offset[1]))
            
            cv2.imshow("image", img)
            cv2.waitKey(1)




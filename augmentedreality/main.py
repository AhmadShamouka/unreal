import os
import cvzone
import cv2
from cvzone.PoseModule import PoseDetector
shirtFolderPath = 'Resources/Shirts'
listShirts = os.listdir(shirtFolderPath)

detector = PoseDetector()

shirtRatioHeightWidth = 550 / 454
cap = cv2.VideoCapture(0)
fixedRatio = 262 / 192
while True:
    success, img = cap.read()
    img = detector.findPose(img)
    lmList, bboxInfo = detector.findPosition(img, draw=False, bboxWithHands=False)
    if lmList:
        lm11 = lmList[11][0:2]
        lm12 = lmList[12][0:2]
        
    imgShirt = cv2.imread(os.path.join(shirtFolderPath, listShirts[1]), cv2.IMREAD_UNCHANGED)
    
    widthOfShirt = int((lm11[0] - lm12[0]) * fixedRatio)
    heightOfShirt = int(widthOfShirt * shirtRatioHeightWidth)
    currentScale=(lm11[0] - lm12[0])/190  
    
    offset=int(44*currentScale),int(48*currentScale)
    imgShirt = cv2.resize(imgShirt, (widthOfShirt, heightOfShirt))
    img = cvzone.overlayPNG(img, imgShirt, (lm12[0]-offset[0],lm12[1]-offset[1]))

        
    cv2.imshow("image", img)
    cv2.waitKey(1)

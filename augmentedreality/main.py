import os
import cvzone
import cv2
from cvzone.PoseModule import PoseDetector
shirtFolderPath = 'Resources/Shirts'
listShirts = os.listdir(shirtFolderPath)

detector = PoseDetector()

cap = cv2.VideoCapture(0)
while True:
    success, img = cap.read()
    img = detector.findPose(img)
    lmList, bboxInfo = detector.findPosition(img, draw=False, bboxWithHands=False)
   
    imgShirt = cv2.imread(os.path.join(shirtFolderPath, listShirts[1]), cv2.IMREAD_UNCHANGED)
    
        
    cv2.imshow("image", img)
    cv2.waitKey(1)

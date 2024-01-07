import os
import cvzone
import cv2
script_dir = os.path.dirname(os.path.abspath(__file__))
shirtFolderPath = os.path.join(script_dir, 'Resources', 'Shirts')
detector = PoseDetector()
from cvzone.PoseModule import PoseDetector
cap = cv2.VideoCapture(0)
while True:
    success, img = cap.read()
    img = detector.findPose(img)
    lmList, bboxInfo = detector.findPosition(img, draw=False, bboxWithHands=False)
    imgShirt = cv2.imread(os.path.join(shirtFolderPath, listShirts[1]), cv2.IMREAD_UNCHANGED)
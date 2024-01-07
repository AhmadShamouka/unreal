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
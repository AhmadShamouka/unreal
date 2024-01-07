import os
import cvzone
import cv2
shirtFolderPath = "Resources"
listShirts = os.listdir(shirtFolderPath)

from cvzone.PoseModule import PoseDetector
cap = cv2.VideoCapture(0)
from flask import Flask, request
from flask_cors import CORS
import os
import cvzone
from io import BytesIO
import cv2
from cvzone.PoseModule import PoseDetector
from pathlib import Path
from rembg import remove
from PIL import Image
app = Flask(__name__)
CORS(app)


    
@app.route('/convert_to_png', methods=['POST'])
def clothes_TryOn():
    try:
        image_path = 'Resources'
        listShirts = os.listdir(image_path)
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

    except Exception as e:
        print(f"Error: {str(e)}")

if __name__ == '__main__':
    app.run(port=5000)

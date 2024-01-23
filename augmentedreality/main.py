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


def convert_to_png():
    image_file = request.files['image']
    output_path = "Resources/output.png"

    image_data = BytesIO(image_file.read())
    
    img = Image.open(image_data)
    img.save(output_path, 'PNG')
    input_img = Image.open(output_path)
    output_img = remove(input_img)
    output_img.save(output_path)
    clothes_TryOn()
   

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
                lm11 = lmList[11][0:2]  # landmark 11
                lm12 = lmList[12][0:2]  # landmark 12
                
                imgShirt = cv2.imread(os.path.join(image_path, listShirts[0]), cv2.IMREAD_UNCHANGED)
                height, width, _ = imgShirt.shape

                # Increase the size of the shirt by a factor of 5
                widthOfShirt = int((lm11[0] - lm12[0]) * 5)
                heightOfShirt = int(widthOfShirt * (height / width))

                imgShirt = cv2.resize(imgShirt, (widthOfShirt, heightOfShirt))

                # Calculate offsets as a proportion of the clothing item's dimensions
                x_offset = int(widthOfShirt * -0.5)  # 50% of the width
                y_offset = int(heightOfShirt * -0.1)  # 10% of the height

                # Calculate the top left corner for shirt placement
                top_left = (min(lm11[0], lm12[0]) + x_offset, min(lm11[1], lm12[1]) + y_offset)

                img = cvzone.overlayPNG(img, imgShirt, top_left)

            
            cv2.imshow("image", img)
            cv2.waitKey(1)

    except Exception as e:
        print(f"Error: {str(e)}")

    except Exception as e:
        print(f"Error: {str(e)}")



if __name__ == '__main__':
    app.run(port=5000)

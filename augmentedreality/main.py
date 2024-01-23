from flask import Flask, request
from flask_cors import CORS
import os
from io import BytesIO
import cv2
import cvzone
from cvzone.PoseModule import PoseDetector
from rembg import remove
from PIL import Image

app = Flask(__name__)
CORS(app)

@app.route('/convert_to_png', methods=['POST'])
def convert_to_png():
    try:
        image_file = request.files['image']
        output_path = "Resources/output.png"

        image_data = BytesIO(image_file.read())

        img = Image.open(image_data)
        img.save(output_path, 'PNG')
        input_img = Image.open(output_path)
        output_img = remove(input_img)
        desired_width = 700
        desired_height = 1000
        img = img.resize((desired_width, desired_height))
        output_img.save(output_path)

        clothes_try_on()



    except Exception as e:
        return f"Error: {str(e)}", 500

def clothes_try_on():
    try:
        list_shirts = os.listdir("Resources")
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
                
                img_shirt = cv2.imread(os.path.join("Resources", list_shirts[0]), cv2.IMREAD_UNCHANGED)
                height, width, _ = img_shirt.shape

                width_of_shirt = int((lm11[0] - lm12[0]) * 3)
                height_of_shirt = int(width_of_shirt * (height / width*1.3))

                img_shirt = cv2.resize(img_shirt, (width_of_shirt, height_of_shirt))

                x_offset = int(width_of_shirt * -0.35)  
                y_offset = int(height_of_shirt * -0.17)  

                top_left = (min(lm11[0], lm12[0]) + x_offset, min(lm11[1], lm12[1]) + y_offset)

                img = cvzone.overlayPNG(img, img_shirt, top_left)

            cv2.imshow("image", img)
            key = cv2.waitKey(1)
            
            if key == 27: 
                break

        cap.release() 

    except Exception as e:
        print(f"Error: {str(e)}")

if __name__ == '__main__':
    app.run(port=5000)

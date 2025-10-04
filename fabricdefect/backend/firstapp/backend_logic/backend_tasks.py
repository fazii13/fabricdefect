# backend_logic/backend_tasks.py

import cv2
from ultralytics import YOLO

def generate_frames():
    model = YOLO(r"D:/Work/Web Projects/My Web Projects/fabricdefect/backend/firstapp/backend_logic/best.pt")
    
    cap = cv2.VideoCapture(0)  # Use the default camera

    while True:
        success, frame = cap.read()
        if not success:
            break
        
        results = model(frame, conf=0.4)
        annotated_frame = results[0].plot()  # Annotate the frame with detections
        
        ret, buffer = cv2.imencode('.jpg', annotated_frame)
        if not ret:
            continue
        
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + buffer.tobytes() + b'\r\n')

    cap.release()

def execute_backend_code():
    # model = YOLO("yolov8n.pt")
    # Replace with your actual backend logic
    result = "Executing backend code."
    return result

def predict_image(image_path):
    model = YOLO(r"D:/Work/Web Projects/My Web Projects/fabricdefect/backend/firstapp/backend_logic/best.pt")
    image = cv2.imread(image_path)
    results = model(image, conf=0.4)
    annotated_image = results[0].plot()  # Annotate the image with detections
    annotated_image_path = image_path.replace('.jpg', '_annotated.jpg')
    cv2.imwrite(annotated_image_path, annotated_image)
    return annotated_image_path

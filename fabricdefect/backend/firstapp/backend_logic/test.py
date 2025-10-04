from ultralytics import YOLO

model = YOLO(r"backend/firstapp/backend_logic/best.pt")
results = model(source=0, show=True, conf=0.4, save=True,stream=False)

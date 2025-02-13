from fastapi import FastAPI



app = FastAPI()

@app.get("/")
def read_roof():
    return {"msg": "hello"}

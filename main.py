from app import app
import webbrowser
if __name__ == "__main__":
    webbrowser.open_new('http://localhost:5000/')
    app.run(host="0.0.0.0", port=5000, debug=True)


import requests
import subprocess
import os
import signal
import platform

is_windows = platform.system() == 'Windows'

if is_windows:
    server_process = subprocess.Popen(["cmd.exe", "/c", "npm", "start"], creationflags=subprocess.CREATE_NEW_PROCESS_GROUP)
else:
    server_process = subprocess.Popen(["npm", "start"], preexec_fn=os.setsid)

urls = {
    "/": "google-ip-range.txt",
    "/ipv4": "google-ip-range-ipv4.txt",
    "/ipv6": "google-ip-range-ipv6.txt",
}

for path, filename in urls.items():
    while True:
        try:
            response = requests.get(f"http://localhost:8080{path}")
            if response.status_code == 200:
                break
        except requests.exceptions.ConnectionError:
            continue

    with open(filename, "w") as file:
        file.write(response.text)

if is_windows:
    os.kill(server_process.pid, signal.CTRL_BREAK_EVENT)
else:
    os.killpg(os.getpgid(server_process.pid), signal.SIGTERM)
# Google IP Range 🌐

Welcome to the **Google IP Range** project! This proxy tool converts the [Google IP ranges JSON](https://www.gstatic.com/ipranges/goog.json) into plain text format, perfect for systems like pfSense that don't accept JSON data.

## Features ✨

- Built with **Express.js** and runs on **Node.js**.
- Provides three access methods:
  - Run the app locally.
  - Use the built-in fetch script.
  - Fetch data directly from the GitHub repository via GitHub Actions.

## Getting Started 🚀

### Run Locally (Port 8080)

#### Using the official Docker image
Docker compose file:
```yaml
services:
  google-ip-range:
    container_name: google-ip-range
    image: rpdjf/google-ip-range:latest
    ports:
      - "8080:8080"
    environment:
      - TZ=Europe/Zurich
    restart: always
```

#### Using nodejs
```bash
git clone "https://github.com/rpdjf/google-ip-range"
npm install
npm start
```

### Fetch Files Without Running the Web Server
```bash
git clone "https://github.com/rpdjf/google-ip-range"
npm install
npm run fetch
```

### Fetch from Raw GitHub Files
- [Google IP Range](https://raw.githubusercontent.com/rpdjf/google-ip-range/main/google-ip-range.txt)
- [Google IPv4 Range](https://raw.githubusercontent.com/rpdjf/google-ip-range/main/google-ip-range-ipv4.txt)
- [Google IPv6 Range](https://raw.githubusercontent.com/rpdjf/google-ip-range/main/google-ip-range-ipv6.txt)

## Routes 🛣️

The application provides three routes:

- `/`: Returns both IPv4 and IPv6 ranges.
- `/ipv4`: Returns only IPv4 ranges.
- `/ipv6`: Returns only IPv6 ranges.

All routes return data in text/plain format.

## Build the Docker Image 🐳
```bash
git clone "https://github.com/rpdjf/google-ip-range"
cd google-ip-range
docker build -t rpdjf/google-ip-range .
```
Then you can run the image with the following command:
```bash
docker compose up -d
```
or without docker compose:
```bash
docker run -d -p 8080:8080 rpdjf/google-ip-range
```
## Why this project? 🤔

This project is designed to help systems that don't support JSON for IP ranges, such as pfSense. By converting Google's IP ranges JSON into plain text, the data can be easily integrated.

## GitHub Actions 🤖

Our GitHub Actions workflow exports the data daily from the three routes into:

- `google-ip-range.txt`
- `google-ip-range-ipv4.txt`
- `google-ip-range-ipv6.txt`

You can always access the latest data directly from the raw files in this repository.

## Conclusion 🎉

The Google IP Range simplifies fetching Google's IP ranges in a compatible format for systems like pfSense. A small yet powerful tool for network management! 🚀

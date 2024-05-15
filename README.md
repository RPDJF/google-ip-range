# Google IP Ranges Proxy 🌐

This project serves as a proxy to the [Google IP ranges JSON](https://www.gstatic.com/ipranges/goog.json), converting it into plain text format. This is particularly useful for systems like pfSense, which don't accept JSON data for IP ranges.

The application is built with Express.js and runs on Node.js.

It provides two ways to access the data: by running the application locally as or by fetching the data directly from the GitHub repository thanks to the github actions.

When running it locally, you are guaranteed to have the latest data, as the application fetches the data from the Google IP ranges JSON every time it's accessed.

In the other hand, fetching the ip range from raw github is easier however the files are updated each hour, so it may not be the latest data.

## Getting Started 🚀

To run the application, follow these steps:

1. Clone the repository.
2. Run `npm install` to install the dependencies.
3. Run `npm start` to start the application.

The application will start running on port 8080.

## Routes 🛣️

The application provides three routes:

- `/`: Returns both IPv4 and IPv6 ranges.
- `/ipv4`: Returns only IPv4 ranges.
- `/ipv6`: Returns only IPv6 ranges.

Each route returns the data in `text/plain` format, making it easy to use in systems that don't support JSON.

## Why this project? 🤔

The main motivation behind this project is to provide a solution for systems that don't support JSON format for IP ranges, like pfSense. By converting the Google IP ranges JSON into plain text, we can easily use the data in such systems.

## GitHub Actions 🤖

This repository includes a GitHub Actions workflow that exports the data from the three routes daily. The exported data is saved in the parent directory as `google-ip-range.txt`, `google-ip-range-ipv4.txt`, and `google-ip-range-ipv6.txt`.

You can access the latest data directly from the raw files in this repository.

## Conclusion 🎉

This project simplifies the process of fetching Google's IP ranges in a format that's compatible with systems like pfSense. It's a small but mighty tool in the world of network management! 🚀

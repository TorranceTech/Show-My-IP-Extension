### Show My IP Extension

- Description

- Show My IP is a simple extension for Firefox that displays your IP address and the IP address of the sites you visit, along with country flags indicating the origin of the IP addresses.

- Build Instructions

- To build an exact copy of the add-on code, follow these step-by-step instructions:

Clone the repository:
bash
Copy code
```
git clone https://github.com/yourusername/show-my-ip-extension.git
```
Navigate to the project directory:
bash
Copy code
```
cd show-my-ip-extension
```
Install dependencies:
Copy code
```
npm install
```
Build the extension:
```
arduino
```
Copy code
```
npm run build
```

Build Script

The build script (npm run build) executes all necessary technical steps to build the extension. It compiles JavaScript, HTML, and CSS files and creates the final extension package.

Operating System and Build Environment Requirements

Operating System: Any system supported by Firefox development tools (Windows, macOS, Linux).
Node.js and npm: Make sure you have Node.js and npm installed. You can download them from https://nodejs.org/.
Required Programs

Node.js: Version 12 or higher.
npm: Automatically installed with Node.js.

### Installation Instructions

To install the extension in Firefox:

- Open Firefox.
- Navigate to `about:debugging`.
- Click on "This Firefox" (or "This Nightly" for Nightly builds).
- Click on "Load Temporary Add-on".
Select the manifest.json file from the extension's build directory (`/path/to/show-my-ip-extension/build/manifest.json`).

### Contributing

Contributions are welcome! Feel free to submit issues, feature requests, or pull requests on the GitHub repository at https://github.com/torrancetech/show-my-ip-extension.

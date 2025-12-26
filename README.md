# Duosub SRT — Dual Subtitles for Video 🎬

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/Version-1.0.0-blue.svg)](#)

**Duosub SRT** is a powerful, lightweight browser extension designed for language learners and cinephiles. It allows you to overlay custom secondary subtitles from local `.srt` files onto almost any video player.

🔗 **Official Website & Privacy Policy:** [https://duosub.github.io](https://duosub.github.io)

---

## ✨ Key Features
* **Universal Compatibility:** Works with most HTML5 video players.
* **Local File Support:** Load your own `.srt` files directly from your device.
* **Privacy First:** No data is uploaded to servers. Everything is processed locally in your browser.
* **Customizable UI:** Adjust font size, color, and position to ensure a perfect viewing experience.
* **Manifest V3:** Built using the latest extension standards for better security and performance.

## 🛠 Installation

### Option 1: Manual Installation (Developer Mode)
1. Download the latest version from the `/extension-build/` folder in this repo.
2. Unzip the file.
3. Open Chrome and navigate to `chrome://extensions/`.
4. Enable **Developer mode** in the top right corner.
5. Click **Load unpacked** and select the unzipped folder.

### Option 2: Chrome Web Store
*Coming soon...* (Link will be updated after publication).

## 🚀 Technical Implementation
The extension uses a **MutationObserver** to monitor the DOM for video elements. Once detected, it creates a transparent overlay layer where the secondary subtitles are rendered using **Vanilla JavaScript**. This ensures zero lag and high compatibility without modifying the original site scripts.

## 📄 License
This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---
*Created by [duosub](https://github.com/duosub)*

# PEPSICO Supply Chain Forecast Dashboard

This project is a landing page created for **Task Three** of the [Forage PEPSICO Advanced Software Engineering](https://www.theforage.com/simulations/pepsico/advanced-software-engineering-84cr) course.

It displays a simple dashboard for PEPSICO's supply chain forecast using **HTML**, **CSS**, and **Vanilla JavaScript**. Distributor data is loaded dynamically from a local `mockData.json` file.

## Project Structure
```
/augur-dashboard
  ├── index.html        # Main HTML page
  ├── styles.css         # Styling with DM Sans and Scope One fonts
  ├── script.js          # JavaScript for dynamic content
  └── mockData.json      # Mock data for distributors
```

## How to Run
Since the project fetches a local JSON file, it must be served using a local server.

- Using VS Code "Live Preview" extension:
  - Right-click `index.html` and select **Open with Live Preview**.

Then open `http://localhost:3000/index.html` (or the port provided) in your browser.

## Features
- Responsive layout using Flexbox.
- Cards dynamically generated from JSON data.
- Clean, modern design with custom Google Fonts.
- Can change the data in the `mockData.json` file or fetch from the backend using APIs.

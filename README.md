# Currency Converter

A responsive Currency Converter built using **HTML**, **Tailwind CSS**, and **Vanilla JavaScript**. The application fetches real-time exchange rates from a public currency API, dynamically updates country flags, and provides an intuitive interface for converting between more than 160 international currencies.

---

## Preview

![Screenshot of UI](image-1.png)

---

## Features

- Convert between 160+ international currencies
- Fetch real-time exchange rates using a public API
- Dynamic currency dropdown generation
- Automatically update country flags based on the selected currency
- Swap source and destination currencies with a single click
- Smooth UI animations and hover effects
- Responsive design built with Tailwind CSS
- Input validation for invalid values
- Graceful error handling for failed API requests

---

## Technologies Used

- HTML5
- Tailwind CSS
- JavaScript (ES6+)
- Fetch API
- Async/Await

---

## Project Structure

```text
Currency-convertor/
│
├── index.html
├── app.js
├── codes.js
├── output.css
└── README.md
```

---

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/ajwazameer/Currency-convertor.git
```

### Run the Project

Open the `index.html` file in your preferred web browser.

No additional installation or dependencies are required.

---

## How It Works

1. Enter the amount to convert.
2. Select the source currency.
3. Select the destination currency.
4. (Optional) Use the swap button to interchange the selected currencies.
5. Click **Get Exchange Rate**.
6. The application fetches the latest exchange rate and displays the converted amount instantly.

---

## API Used

This project uses the free Currency API by Fawaz Ahmed.

https://github.com/fawazahmed0/currency-api

---

## Concepts Practiced

- DOM Manipulation
- Dynamic HTML Generation
- Event Handling
- Fetch API
- Async/Await
- Working with REST APIs
- JavaScript Objects
- Template Literals
- Input Validation
- Error Handling
- Responsive Design with Tailwind CSS

---

## Future Improvements

- Display exchange rate history
- Save favorite currencies
- Add dark mode
- Display the last updated exchange rate timestamp
- Support offline caching
- Add unit and integration tests

---

## Key Learnings

This project helped strengthen my understanding of:

- Working with asynchronous JavaScript using `async/await`
- Consuming REST APIs with the Fetch API
- Dynamically generating and updating DOM elements
- Manipulating the DOM based on user interactions
- Building responsive user interfaces with Tailwind CSS
- Structuring JavaScript into reusable functions
- Validating user input and handling runtime errors gracefully

---

## Author

**Ajwa Zameer**

GitHub: https://github.com/ajwazameer

---

## License

This project is licensed under the MIT License.

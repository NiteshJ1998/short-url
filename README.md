# 🔗 URL Shortener

A simple URL shortener service that takes a valid URL and returns a shortened version. The service also keeps track of the total number of visits (clicks) to each shortened URL.

---

## 📌 Features

- Shortens a given URL
- Redirects users to the original URL via the shortened link
- Tracks total clicks per shortened URL

---

## 🚦 API Routes

### 🔹 `POST /url`

- **Description:** Generates a new short URL.
- **Request Body:**
  ```json
  {
    "originalUrl": "https://example.com/your-long-url"
  }
  ```
- **Response Example:**
  ```json
  {
    "shortUrl": "https://example.com/random-id"
  }
  ```

---

### 🔹 `GET /:id`

- **Description:** Redirects the user to the original URL based on the provided short ID.
- **Example:**  
  Visiting `https://example.com/abc123` will redirect the user to the original long URL.

---

### 🔹 `GET /url/analytics/:id`

- **Description:** Returns analytics (total clicks) for the given short URL.
- **Response Example:**
  ```json
  {
    "clicks": 42
  }
  ```

---

## 🛠️ Setup Instructions

> _Optional: Include these if needed in your project._

1. Clone the repository  
   `git clone https://github.com/your-repo/url-shortener.git`

2. Install dependencies  
   `npm install`

3. Start the server  
   `npm run start`

---

## 📄 License

MIT License

---

## 📬 Contact

For suggestions or issues, open a GitHub issue or reach out via email.

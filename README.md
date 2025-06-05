# Now Streamed

Now Streamed is a sleek web application that lets you discover trending and latest movies and TV shows, explore upcoming releases, search for your favorites, find where to watch them, and watch trailers and videos—all in one place.

---

## Features

- **Trending:** See popular movies and TV shows currently trending.  
- **Latest Movies & Shows:** Stay updated with the newest releases.  
- **Upcoming:** Get info on upcoming movies and TV shows.  
- **Search:** Search any movie or show by name.  
- **Where to Watch:** Discover streaming platforms available for each title.  
- **Trailers & Videos:** Watch trailers and main videos inside the app.

---

## File Structure

```
NowStreamed/
├── public/                  # Contains logo and static assets
├── src/                     # Main source code (fully deployed and tested)
├── .gitignore               # Git ignore rules
├── LICENSE                  # License file
├── README.md                # Project README
├── eslint.config.js         # ESLint configuration
├── index.html               # Main HTML file with hero section
├── package-lock.json        # Lock file for dependencies
├── package.json             # Project dependencies and scripts
└── vite.config.js           # Vite configuration
```

---

## Installation & Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Hanan-Nawaz/NowStreamed.git
   cd NowStreamed
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add:

   ```
   VITE_URL=https://api.themoviedb.org/3/
   VITE_API_KEY=your_tmdb_api_key
   VITE_IMAGE_URL = https://image.tmdb.org/t/p/original
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Technologies Used

- React  
- Vite  
- Axios  
- TMDB API  

---

## Screenshots

### Logo

<img src="https://github.com/Hanan-Nawaz/NowStreamed/blob/main/src/assets/images/logo.png" height="100px" width="100px"/>

### Home Page

![Home Page](https://github.com/Hanan-Nawaz/NowStreamed/blob/main/src/assets/images/home.png)

### Search

![Search Page](https://github.com/Hanan-Nawaz/NowStreamed/blob/main/src/assets/images/sreach.png)

### Detail Page

![Detail Page](https://github.com/Hanan-Nawaz/NowStreamed/blob/main/src/assets/images/detail.png)

### Mobile View

![Mobile View](https://github.com/Hanan-Nawaz/NowStreamed/blob/main/src/assets/images/mobile.png)

---

## Credits

This project uses data and APIs provided by [The Movie Database (TMDB)](https://www.themoviedb.org/).  
Big thanks to the TMDB community for their open API and extensive media database.

---

## Contributing

Feel free to fork the project, open issues, or submit pull requests.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Contact

Created by Hanan Nawaz. Feel free to connect!  

GitHub: [https://github.com/Hanan-Nawaz](https://github.com/Hanan-Nawaz)

---

## Links

GitHub Repo: [https://github.com/Hanan-Nawaz/NowStreamed](https://github.com/Hanan-Nawaz/NowStreamed)

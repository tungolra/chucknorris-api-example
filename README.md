### About 
This minimally-designed application demonstrates the integration of external API calls [(ChuckNorrisAPI)](https://api.chucknorris.io) using axios. This applications employs Express middlewares to make API calls using JS promises and demonstrates the use of rendering client-side data using EJS. 

The application gives users the option to generate a random Chuck Norris joke or retrieve a Chuck Norris joke by category. 

### Installation 
1. Clone the repo
2. <code>npm i</code> to install packages and dependencies 
3. Generate personal access token through GitHub. 
4. Request token from https://api.chucknorris.io to access data 
5. <code>touch .env</code> to create environment variables
    - use GitHub access token as value for <code>GITHUB_TOKEN</code> environment variable. 
6. <code>nodemon</code> to run the server 
7. Enter <code>localhost:<your_port></code> into your browser
8. Generate your first Chuck Norris joke! 

### Technologies
- Express
- JavaScript
- EJS/HTML
- CSS/Bootstrap
- Axios

Completed Oct 2022. 
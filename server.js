const app = require("./app.js"); 

require("dotenv").config();
const PORT = process.env.PORT || 1234;
app.listen(PORT, () => {
    console.log(`Bookmarks live on port: ${PORT}`)
})

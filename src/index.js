const express = require('express')
const app = express()

const PORT = 8000

app.get('/index', navController.goIndex)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
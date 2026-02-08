import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 3001

// In-memory store for the valentine name (no redeploy needed)
let valentineName = 'Valentine'

app.use(cors())
app.use(express.json())

app.get('/api/name', (_req, res) => {
  res.json({ name: valentineName })
})

app.post('/api/name', (req, res) => {
  const name = req.body?.name?.trim()
  if (name) {
    valentineName = name
    return res.json({ name: valentineName })
  }
  res.status(400).json({ error: 'Missing or invalid "name" in body' })
})

app.listen(PORT, () => {
  console.log(`Valentine name API running at http://localhost:${PORT}`)
})

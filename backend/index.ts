import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'
import { initBoardTables } from '../database/init'
import postsRouter from '../api/routes/posts'
import chatRouter from '../api/routes/chat'
import feedRouter from '../api/routes/feed'
import itemsRouter from '../api/routes/items'
import visionRouter from '../api/routes/vision'
import workResultRouter from '../api/routes/workResult'
import seedRouter from '../api/routes/seed'
import vectorizedTablesRouter from '../api/routes/vectorizedTables'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = parseInt(process.env.PORT || '5000', 10)

app.use(cors())
app.use(express.json({ limit: '100mb' }))
app.use(express.urlencoded({ extended: true, limit: '100mb' }))

const uploadDir = path.join(__dirname, '..', 'uploads')
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true })
}

app.use('/api/files', express.static(uploadDir))

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.use('/api/posts', postsRouter)
app.use('/api/chat', chatRouter)
app.use('/api/feed', feedRouter)
app.use('/api/items', itemsRouter)
app.use('/api/vision', visionRouter)
app.use('/api/work-result', workResultRouter)
app.use('/api/seed', seedRouter)
app.use('/api/vectorized-tables', vectorizedTablesRouter)

initBoardTables().catch((err) => {
  console.error('⚠️ DB 초기화 실패 (서버는 계속 실행됩니다):', err)
})

const distPath = path.join(__dirname, '..', 'dist')
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath))
  app.get('*', (_req, res) => {
    res.sendFile(path.join(distPath, 'index.html'))
  })
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`AI Smart Factory ERP 서버가 포트 ${PORT}에서 실행 중입니다.`)
})

import express, { Request, Response } from 'express'
import { query } from '../../backend/lib/db'

const router = express.Router()

router.get('/', async (_req: Request, res: Response) => {
  try {
    const rows = await query(`SELECT table_name FROM vectorized_tables ORDER BY created_at DESC`)
    res.json(rows.map((r: { table_name: string }) => r.table_name))
  } catch (error) {
    console.error('vectorized-tables list error:', error)
    res.status(500).json({ message: '조회에 실패했습니다.' })
  }
})

router.post('/', async (req: Request, res: Response) => {
  try {
    const { tableName } = req.body
    if (!tableName) {
      return res.status(400).json({ message: 'table_name이 없습니다.' })
    }
    await query(`INSERT INTO vectorized_tables (table_name) VALUES ($1) ON CONFLICT DO NOTHING`, [tableName])
    res.json({ success: true })
  } catch (error) {
    console.error('vectorized-tables insert error:', error)
    res.status(500).json({ message: '저장에 실패했습니다.' })
  }
})

export default router

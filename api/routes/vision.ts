import express, { Request, Response } from 'express'
import { query } from '../../backend/lib/db'

const router = express.Router()

router.get('/logs', async (_req: Request, res: Response) => {
  try {
    const rows = await query(`
      SELECT
        l.id,
        l.scan_time AS time,
        l.barcode,
        l.result,
        l.defect_type AS "defectType",
        l.confidence_score AS confidence,
        l.image_url AS image,
        COALESCE(i.item_name, '알 수 없음') AS "itemName"
      FROM ai_vision_logs l
      LEFT JOIN work_performances p ON l.work_performance_id = p.id
      LEFT JOIN item_mst i ON p.item_cd = i.item_cd
      ORDER BY l.scan_time DESC
      LIMIT 50
    `)
    res.json(rows)
  } catch (error) {
    console.error('vision/logs error:', error)
    res.status(500).json({ message: '로그 조회 실패' })
  }
})

router.get('/stats', async (_req: Request, res: Response) => {
  try {
    const [totalRow] = await query(`SELECT COUNT(*) AS count FROM ai_vision_logs`)
    const [ngRow] = await query(`SELECT COUNT(*) AS count FROM ai_vision_logs WHERE result = 'NG'`)
    const distribution = await query(`
      SELECT defect_type AS type, COUNT(*) AS count
      FROM ai_vision_logs
      WHERE result = 'NG' AND defect_type IS NOT NULL
      GROUP BY defect_type
      ORDER BY count DESC
    `)
    const trend = await query(`
      SELECT scan_time AS time, result
      FROM ai_vision_logs
      ORDER BY scan_time DESC
      LIMIT 20
    `)
    const total = Number(totalRow.count)
    const ng = Number(ngRow.count)
    res.json({
      total,
      ng,
      ok: total - ng,
      distribution: distribution.map((d: { type: string; count: string }) => ({ type: d.type, count: Number(d.count) })),
      trend,
    })
  } catch (error) {
    console.error('vision/stats error:', error)
    res.status(500).json({ message: '통계 조회 실패' })
  }
})

export default router

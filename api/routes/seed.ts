import express, { Request, Response } from 'express'
import { query } from '../../backend/lib/db'

const router = express.Router()

router.post('/', async (_req: Request, res: Response) => {
  try {
    await query(`
      INSERT INTO item_mst (item_cd, item_name, std, unit_cd)
      VALUES
        ('PART-001', '자동차 엔진 피스톤 A', 'Aluminum Alloy', 'EA'),
        ('PART-002', '브레이크 패드 V2', 'Ceramic Composite', 'EA'),
        ('PART-003', '전조등 하우징', 'Polycarbonate', 'EA')
      ON CONFLICT (item_cd) DO NOTHING
    `)

    await query(`
      INSERT INTO emp_mst (emp_id, emp_name, dept_name)
      VALUES
        ('EMP-001', '김철수', '생산1팀'),
        ('EMP-002', '이영희', '품질관리팀')
      ON CONFLICT (emp_id) DO NOTHING
    `)

    const perfRows = await query(`
      INSERT INTO work_performances (work_order_no, item_cd, emp_id, plan_qty, prod_qty, bad_qty, status)
      VALUES ('WO-20260314-SEED', 'PART-001', 'EMP-001', 1000, 0, 0, 'RUNNING')
      RETURNING id
    `)
    const perfId = perfRows[0].id

    const defectTypes = ['Normal', 'Crack', 'Scratch', 'Dent', 'Stain']
    const logValues: string[] = []
    const logParams: unknown[] = []
    let paramIdx = 1

    for (let i = 0; i < 50; i++) {
      const isDefect = Math.random() < 0.15
      const defectType = isDefect ? defectTypes[Math.floor(Math.random() * 4) + 1] : null
      const confidence = (Math.random() * 14.9 + 85).toFixed(2)
      const imageUrl = isDefect
        ? 'https://placehold.co/600x400/ff0000/white?text=Defect+Detected'
        : 'https://placehold.co/600x400/00ff00/white?text=OK'
      const scanTime = new Date(Date.now() - i * 60000)

      logValues.push(`($${paramIdx++}, $${paramIdx++}, $${paramIdx++}, $${paramIdx++}, $${paramIdx++}, $${paramIdx++}, $${paramIdx++})`)
      logParams.push(perfId, `BC-${Date.now()}-${i}`, scanTime, isDefect ? 'NG' : 'OK', defectType, confidence, imageUrl)
    }

    await query(
      `INSERT INTO ai_vision_logs (work_performance_id, barcode, scan_time, result, defect_type, confidence_score, image_url)
       VALUES ${logValues.join(', ')}`,
      logParams
    )

    res.json({ message: '샘플 데이터 생성 완료', performanceId: perfId })
  } catch (error) {
    console.error('Seed error:', error)
    res.status(500).json({ message: '샘플 데이터 생성 실패', error: String(error) })
  }
})

export default router

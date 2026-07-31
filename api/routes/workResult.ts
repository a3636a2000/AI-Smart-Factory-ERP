import express, { Request, Response } from 'express'
import { query } from '../../backend/lib/db'

const router = express.Router()

router.post('/', async (req: Request, res: Response) => {
  try {
    const { workOrderNo, prcCd, prcName, workDate, empId, details } = req.body
    if (!details || details.length === 0) {
      return res.status(400).json({ message: '상세내역이 없습니다. 품목을 추가해주세요.' })
    }
    const totalQty = (details as any[]).reduce((s: number, d: any) => s + (Number(d.prcRealQty) || 0), 0)
    const totalBadQty = (details as any[]).reduce((s: number, d: any) => s + (Number(d.badQty) || 0), 0)
    const [saved] = await query(
      `INSERT INTO work_result_entries (work_order_no, prc_cd, prc_name, work_date, emp_id, total_qty, total_bad_qty, details)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
       RETURNING id, work_order_no AS "workOrderNo", prc_cd AS "prcCd", prc_name AS "prcName",
                 work_date AS "workDate", emp_id AS "empId", total_qty AS "totalQty",
                 total_bad_qty AS "totalBadQty", details, created_at AS "createdAt"`,
      [workOrderNo || `WO-${Date.now()}`, prcCd || '', prcName || '', workDate || new Date().toISOString().split('T')[0], empId || '', totalQty, totalBadQty, JSON.stringify(details)]
    )
    res.json({ success: true, id: saved.id, data: saved })
  } catch (error) {
    console.error('work-result save error:', error)
    res.status(500).json({ message: '저장에 실패했습니다.', error: String(error) })
  }
})

router.get('/', async (_req: Request, res: Response) => {
  try {
    const rows = await query(
      `SELECT id, work_order_no AS "workOrderNo", prc_cd AS "prcCd", prc_name AS "prcName",
              work_date AS "workDate", emp_id AS "empId", total_qty AS "totalQty",
              total_bad_qty AS "totalBadQty", details, created_at AS "createdAt"
       FROM work_result_entries
       ORDER BY created_at DESC
       LIMIT 100`
    )
    res.json(rows)
  } catch (error) {
    console.error('work-result list error:', error)
    res.status(500).json({ message: '조회에 실패했습니다.' })
  }
})

router.put('/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)
    const { workOrderNo, prcCd, prcName, workDate, empId, details } = req.body
    const totalQty = (details || []).reduce((s: number, d: any) => s + (Number(d.prcRealQty) || 0), 0)
    const totalBadQty = (details || []).reduce((s: number, d: any) => s + (Number(d.badQty) || 0), 0)
    const [updated] = await query(
      `UPDATE work_result_entries
       SET work_order_no=$1, prc_cd=$2, prc_name=$3, work_date=$4, emp_id=$5,
           total_qty=$6, total_bad_qty=$7, details=$8, updated_at=NOW()
       WHERE id=$9
       RETURNING id, work_order_no AS "workOrderNo", prc_cd AS "prcCd", prc_name AS "prcName",
                 work_date AS "workDate", emp_id AS "empId", total_qty AS "totalQty",
                 total_bad_qty AS "totalBadQty", details`,
      [workOrderNo, prcCd, prcName, workDate, empId, totalQty, totalBadQty, JSON.stringify(details || []), id]
    )
    res.json({ success: true, data: updated })
  } catch (error) {
    console.error('work-result update error:', error)
    res.status(500).json({ message: '수정에 실패했습니다.' })
  }
})

router.delete('/:id', async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)
    await query('DELETE FROM work_result_entries WHERE id=$1', [id])
    res.json({ success: true })
  } catch (error) {
    console.error('work-result delete error:', error)
    res.status(500).json({ message: '삭제에 실패했습니다.' })
  }
})

export default router

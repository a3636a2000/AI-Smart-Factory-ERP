import pg from 'pg'
import dotenv from 'dotenv'

dotenv.config()
const { Pool } = pg

let pool: pg.Pool

function isLocalDatabase(url?: string) {
  if (!url) return true
  return /localhost|127\.0\.0\.1/.test(url)
}

if (process.env.DATABASE_URL) {
  console.log('🔗 DATABASE_URL 사용하여 연결')
  const useSsl = !isLocalDatabase(process.env.DATABASE_URL)
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ...(useSsl ? { ssl: { rejectUnauthorized: false } } : {}),
  })
} else {
  console.log('🔗 개별 환경 변수 사용하여 연결')
  pool = new Pool({
    user: process.env.PGUSER || 'postgres',
    host: process.env.PGHOST || 'localhost',
    database: process.env.PGDATABASE || 'ai_smart_factory_erp',
    password: process.env.PGPASSWORD || '',
    port: parseInt(process.env.PGPORT || '5432'),
    ssl: process.env.REPLIT_DEPLOYMENT === '1' ? { rejectUnauthorized: false } : undefined,
  })
}

export async function query(text: string, params: unknown[] = []) {
  try {
    const res = await pool.query(text, params)
    return res.rows
  } catch (error) {
    console.error('❌ 쿼리 실행 오류:', error)
    throw error
  }
}

export { pool }

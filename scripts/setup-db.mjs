import pg from 'pg'
import dotenv from 'dotenv'

dotenv.config()

const passwords = ['postgres', '', 'admin', '1234']
const dbName = 'ai_smart_factory_erp'

async function tryConnect(password) {
  const client = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password,
    port: 5432,
  })
  await client.connect()
  return client
}

async function main() {
  let client = null
  let workingPassword = ''

  for (const pw of passwords) {
    try {
      client = await tryConnect(pw)
      workingPassword = pw
      console.log(`OK: connected with password="${pw || '(empty)'}"`)
      break
    } catch (e) {
      console.log(`FAIL password="${pw || '(empty)'}": ${e.message}`)
    }
  }

  if (!client) {
    console.error('Could not connect to PostgreSQL')
    process.exit(1)
  }

  const exists = await client.query(
    `SELECT 1 FROM pg_database WHERE datname = $1`,
    [dbName]
  )

  if (exists.rowCount === 0) {
    await client.query(`CREATE DATABASE ${dbName}`)
    console.log(`Created database: ${dbName}`)
  } else {
    console.log(`Database already exists: ${dbName}`)
  }

  await client.end()

  const testClient = new pg.Client({
    user: 'postgres',
    host: 'localhost',
    database: dbName,
    password: workingPassword,
    port: 5432,
  })
  await testClient.connect()
  await testClient.query('SELECT NOW()')
  await testClient.end()
  console.log(`Verified connection to ${dbName}`)

  const url = `postgresql://postgres:${encodeURIComponent(workingPassword)}@localhost:5432/${dbName}`
  console.log('DATABASE_URL=' + url)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})

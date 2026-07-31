declare const process: { env?: { GEMINI_API_KEY?: string } }

const STORAGE_KEY = 'gemini_api_key'
const STORAGE_KEYS = 'gemini_api_keys'

/** .env의 GEMINI_API_KEY를 localStorage에 동기화 */
export function initGeminiApiKeyFromEnv() {
  const envKey = (typeof process !== 'undefined' && process.env?.GEMINI_API_KEY) || ''
  if (!envKey.trim()) return

  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, envKey.trim())
  }

  try {
    const raw = localStorage.getItem(STORAGE_KEYS)
    const keys = raw ? JSON.parse(raw) : []
    const hasKey = Array.isArray(keys) && keys.some((k: { key?: string }) => k.key === envKey.trim())
    if (!hasKey) {
      localStorage.setItem(
        STORAGE_KEYS,
        JSON.stringify([{ db: '기본 데이터베이스', key: envKey.trim() }, ...(Array.isArray(keys) ? keys : [])])
      )
    }
  } catch {
    localStorage.setItem(STORAGE_KEYS, JSON.stringify([{ db: '기본 데이터베이스', key: envKey.trim() }]))
  }
}

export function getGeminiApiKey(): string {
  return localStorage.getItem(STORAGE_KEY) || (typeof process !== 'undefined' && process.env?.GEMINI_API_KEY) || ''
}

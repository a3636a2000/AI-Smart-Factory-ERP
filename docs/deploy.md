# 배포 가이드

## GitHub

```bash
git remote add aivision https://github.com/a3636a2000/AIvision.git
git push -u aivision main
```

## Render

| 항목 | 값 |
|------|-----|
| Name | ai-smart-factory-erp |
| Build Command | `npm install && npm run build` |
| Start Command | `npm start` |
| DATABASE_URL | PostgreSQL 연결 URL |

## Railway

GitHub 저장소 연결 → PostgreSQL 추가 → Deploy

## 프로젝트 구조

```
frontend/   → React UI (Vite)
backend/    → Express 서버
api/        → REST 라우트
database/   → PostgreSQL 스키마
ai/         → Gemini, OCR, Vision
```

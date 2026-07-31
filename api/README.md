# API 레이어

Express REST API 라우트 모듈입니다.

## 엔드포인트

| 경로 | 파일 | 설명 |
|------|------|------|
| `/api/posts` | `routes/posts.ts` | 게시판 CRUD |
| `/api/chat` | `routes/chat.ts` | 채팅 메시지 |
| `/api/feed` | `routes/feed.ts` | 피드 게시판 (Cloudinary) |
| `/api/items` | `routes/items.ts` | 품목 마스터 |
| `/api/vision` | `routes/vision.ts` | AI 비전 로그·통계 |
| `/api/work-result` | `routes/workResult.ts` | MES 작업실적 |
| `/api/seed` | `routes/seed.ts` | 샘플 데이터 |
| `/api/vectorized-tables` | `routes/vectorizedTables.ts` | 벡터화 테이블 |

## 헬스체크

`GET /api/health` — `backend/index.ts`

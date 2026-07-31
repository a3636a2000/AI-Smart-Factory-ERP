# Backend

Express 서버 진입점 및 DB 연결 레이어입니다.

## 구조

```
backend/
├── index.ts          # Express 앱, 미들웨어, 라우트 등록, SPA 서빙
└── lib/
    └── db.ts         # PostgreSQL Pool, query() 헬퍼
```

## 실행

```bash
npm run dev:server   # 개발 (hot reload)
npm start            # 프로덕션
```

API 라우트는 `api/routes/`에 정의되어 있으며 `backend/index.ts`에서 마운트됩니다.

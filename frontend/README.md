# Frontend

React + Vite 기반 SPA입니다.

## 구조

```
frontend/
├── index.html
├── public/           # 정적 자산 (manifest, robots, logo)
└── src/
    ├── App.tsx       # 라우팅
    ├── pages/        # 화면별 페이지 컴포넌트
    ├── components/   # Layout, Sidebar, UI
    ├── store/        # Zustand 전역 상태
    └── video-maker/  # 동영상 제작 모듈
```

## 실행

```bash
npm run dev:client
```

## Alias

| Alias | 경로 |
|-------|------|
| `@/` | `frontend/src/` |
| `@ai/` | `ai/` |

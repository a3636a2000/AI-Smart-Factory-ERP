# AI-Smart-Factory-ERP

**한국품질재단 제조AI 스마트팩토리 ERP 실습 포트폴리오**

MES · AI 비전 검사 · 생산 대시보드 · AI 데이터분석 · 문서 편집을 통합한 풀스택 ERP 실습 플랫폼입니다.

## Repository 구조

```
ai-smart-factory-erp/
│
├── README.md
├── docs/
│   ├── architecture.png      # 시스템 아키텍처
│   ├── erd.png               # ERD
│   ├── workflow.png          # 업무 흐름
│   ├── deploy.md             # 배포 가이드
│   ├── presentation/         # PPT, 포스터
│   ├── screenshots/          # 실행 화면 캡처
│   └── introduction_video/   # 소개 영상 자막
│
├── frontend/                 # React + Vite UI
│   ├── index.html
│   ├── public/
│   └── src/
│       ├── pages/            # 22개 화면
│       ├── components/
│       └── store/
│
├── backend/                  # Express 서버 진입점
│   ├── index.ts
│   └── lib/
│       └── db.ts             # PostgreSQL Pool
│
├── database/                 # DB 스키마·초기화
│   ├── init.ts               # 테이블 자동 생성
│   ├── schema/               # SQL 스키마 참조
│   └── seeds/                # 샘플 데이터
│
├── ai/                       # AI 모듈
│   ├── gemini/               # Gemini API (PDF·동영상)
│   ├── ocr/                  # Tesseract OCR
│   └── vision/               # AI 비전 검사
│
└── api/                      # REST API 라우트
    └── routes/
        ├── posts.ts          # 게시판
        ├── chat.ts           # 채팅
        ├── feed.ts           # 피드
        ├── items.ts          # 품목 마스터
        ├── vision.ts         # AI 비전 로그
        ├── workResult.ts     # 작업실적
        ├── seed.ts           # 샘플 데이터
        └── vectorizedTables.ts
```

## 주요 기능

| 영역 | 기능 |
|------|------|
| 스마트팩토리 | 대시보드, MES 작업실적, AI 비전, 품목·검사 관리 |
| AI 데이터분석 | DB 벡터화, 온톨로지, 패턴 분석, 실시간 인사이트 |
| 기본 서비스 | PDF 변환, AI 한글 편집, 동영상 제작, 채팅 |
| 정책/지원 | FAQ, 개인정보, 이용약관, 쿠키 정책 |

## 기술 스택

- **Frontend:** React, TypeScript, Vite, Tailwind CSS, Zustand, TanStack Query
- **Backend:** Express, PostgreSQL (`pg`)
- **AI:** Google Gemini, Tesseract.js, TensorFlow.js

## 실행

```bash
npm install
npm run dev
```

| 서비스 | URL |
|--------|-----|
| Frontend | http://localhost:5173 |
| Backend API | http://localhost:5000 |

환경변수 `DATABASE_URL` 설정 시 DB 연동 기능(게시판, 채팅, MES, 비전 로그) 사용 가능.

## 작성자

정현민 · 한국품질재단 AI 스마트팩토리 실습

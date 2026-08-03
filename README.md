# AI Smart Factory ERP

> **AI Smart Factory ERP** — 한국품질재단 제조 AI 스마트팩토리 기업 연계 프로젝트  
> MES · AI 비전 검사 · 생산 대시보드 · AI 데이터분석 · 문서 편집을 하나의 웹 플랫폼으로 통합한 풀스택 ERP

---

## 목차

1. [소개](#-소개)
2. [스크린샷](#-스크린샷)
3. [주요 기능](#-주요-기능)
4. [기술 스택](#-기술-스택)
5. [아키텍처](#-아키텍처)
6. [프로젝트 구조](#-프로젝트-구조)
7. [실행 방법](#-실행-방법)
8. [민감 정보 처리](#-민감-정보-처리)
9. [라이선스](#-라이선스)

---

## 📖 소개

AI Smart Factory ERP는 **React 프론트엔드**와 **Express + PostgreSQL 백엔드**로 구성된 제조 AI 스마트팩토리 **통합 관리 플랫폼**입니다.

- **스마트팩토리**: KPI 대시보드, MES 작업실적, AI 비전 모니터링·검사 설정, 품목·검사 요청 관리
- **AI 데이터분석**: DB 벡터화 설정, 온톨로지 분석·패턴, 실시간 인사이트 데모
- **기본 서비스**: PDF 변환, AI 한글 OCR 편집, Gemini 기반 동영상 제작, 실시간 채팅
- **정책/지원**: FAQ, 개인정보처리방침, 이용약관, 쿠키 정책

한국품질재단(KFQ) AI 스마트팩토리 **기업 연계 프로젝트**로 제작되었습니다.

---

## 📷 스크린샷

> `docs/screenshots/` 폴더의 실행 화면 캡처입니다.

| 메인 포털 | 스마트 대시보드 | AI 비전 | 작업 실적 |
|:---------:|:---------------:|:-------:|:---------:|
| ![screen01](docs/screenshots/screen_01.png) | ![screen06](docs/screenshots/screen_06.png) | ![screen03](docs/screenshots/screen_03.png) | ![screen02](docs/screenshots/screen_02.png) |

| PDF 변환 | 이미지 편집 | 동영상 제작 | 채팅 |
|:--------:|:-----------:|:-----------:|:----:|
| ![screen07](docs/screenshots/screen_07.png) | ![screen08](docs/screenshots/screen_08.png) | ![screen09](docs/screenshots/screen_09.png) | ![screen10](docs/screenshots/screen_10.png) |

| 아키텍처 | ERD | 업무 흐름 |
|:--------:|:---:|:---------:|
| ![architecture](docs/architecture.png) | ![erd](docs/erd.png) | ![workflow](docs/workflow.png) |

---

## ✨ 주요 기능

### 🏭 AI 스마트팩토리

#### 스마트 대시보드
- ORDER / 납품 / 매출 등 KPI 카드 UI
- 설비·공정별 차트 (Recharts)
- AI 비전 **종합 수율** — PostgreSQL `ai_vision_logs` 기반 양품·불량 집계
- 샘플 데이터 시드 버튼 (`POST /api/seed`)

#### 작업 실적 등록 (MES)
- 작업지시·품목 조회 모달
- 바코드/QR 스캔 (카메라 + 직접 입력)
- 생산·불량 수량 등록 및 `/api/work-result` CRUD

#### AI 비전 모니터링 · 검사 설정
- 웹캠 기반 검사 UI, 로그 폴링 (`/api/vision/logs`)
- 검사 간격·신뢰도·품목·불량유형 설정 (Zustand)
- HW / Vieworks 연동 설정 UI

#### 품목등록 · 검사 요청 등록
- 품목 마스터 DB CRUD (`/api/items`)
- 검사 요청·불량유형 관리 UI

---

### 📊 AI 데이터분석

| 메뉴 | 설명 |
|------|------|
| 데이터베이스 설정 | 테이블 벡터화 파이프라인 UI, Gemini Key 관리, `/api/vectorized-tables` |
| AI 온톨로지 분석 | 지식 그래프·관계 분석 데모 UI |
| AI 온톨로지 관리 | 패턴·상관관계 차트 데모 |
| 실시간 인사이트 | 예측·이상탐지·패턴 분석 데모 대시보드 |

---

### 🛠 기본 서비스

#### PDF 변환
- PDF.js로 페이지 → 이미지 변환
- NotebookLM 워터마크 자동 제거
- Gemini 비전 기반 PPT 레이아웃 분석 (고급 모드)

#### 이미지 편집
- Tesseract.js 한글 OCR
- 선택 영역 텍스트 인식·교체, 다운로드

#### 동영상 제작
- PDF/이미지 슬라이드 구성
- Gemini 대본 생성 + TTS
- WebM / PPTX 내보내기

#### 채팅
- 채널별 실시간 메시지 (폴링)
- 플로팅 채팅 위젯 + 전체 채팅방
- 피드 게시판 (Cloudinary 이미지 업로드 선택)

---

### 📋 정책 / 고객지원

- FAQ · 공지 · 이용가이드
- 개인정보처리방침 · 이용약관 · 쿠키 정책 (인디고 라이트 테마)

---

## 🛠 기술 스택

### 공통

| 항목 | 기술 |
|------|------|
| 언어 | TypeScript |
| 패키지 관리 | npm |
| 런타임 | Node.js ≥ 20 |
| 환경변수 | dotenv |

### Frontend (`frontend/`)

| 항목 | 기술 |
|------|------|
| UI | React 18, Tailwind CSS, Lucide Icons |
| 빌드 | Vite 5 |
| 상태 | Zustand |
| 데이터 페칭 | TanStack Query |
| 차트 | Recharts |
| 라우팅 | React Router v6 |
| OCR | Tesseract.js |
| PDF | pdf.js, jsPDF, pptxgenjs |
| AI | Google Gemini (`@google/genai`) |
| 바코드 | @zxing/library |

### Backend (`backend/` + `api/`)

| 항목 | 기술 |
|------|------|
| 서버 | Express |
| DB | PostgreSQL (`pg`) |
| 업로드 | Multer, Cloudinary (피드) |
| 실행 | tsx |

### AI (`ai/`)

| 항목 | 기술 |
|------|------|
| LLM / TTS | Google Gemini |
| OCR | Tesseract.js (프론트) |
| Vision UI | getUserMedia + 검사 로그 API |

---

## 🏗 아키텍처

```text
+------------------------------------------------------------------+
|                        Browser (Vite)                            |
|  frontend/src                                                    |
|    - pages/      SmartDashboard, WorkResult, Vision*, ...        |
|    - components  Layout, Sidebar, FloatingChat                   |
|    - store/      Zustand (vision setup, tabs, defects)           |
|                                                                  |
|                     /api  proxy (dev)                            |
+------------------------------+-----------------------------------+
                               |
                               v
+------------------------------------------------------------------+
|                   Express (backend/index.ts)                     |
|  api/routes/                                                     |
|    - items, workResult, vision, seed                             |
|    - posts, chat, feed, vectorizedTables                         |
|    - health                                                      |
|                                                                  |
|         backend/lib/db.ts  --->  PostgreSQL                      |
|         database/init.ts   --->  Auto schema init                |
+------------------------------------------------------------------+
                               |
                               v
+------------------------------------------------------------------+
|                        AI (browser)                              |
|  ai/gemini     --->  PDF analysis / video script + TTS           |
|  ImageEditor   --->  Tesseract OCR                               |
|  Vision*       --->  Webcam UI + /api/vision logs                |
+------------------------------------------------------------------+
```

---

## 📂 프로젝트 구조

```
ai-smart-factory-erp/
├── README.md
├── package.json
├── vite.config.ts
├── docker-compose.yml                  # 로컬 PostgreSQL
├── .env.example                        # 환경변수 예시
│
├── docs/
│   ├── architecture.png
│   ├── erd.png
│   ├── workflow.png
│   ├── deploy.md
│   ├── presentation/                   # PPT, 포스터
│   ├── screenshots/                    # 실행 화면
│   └── introduction_video/             # 소개 자막
│
├── frontend/                           # React + Vite SPA
│   ├── index.html
│   ├── public/
│   └── src/
│       ├── App.tsx                     # 라우팅 / PageManager
│       ├── main.tsx
│       ├── components/                 # Layout, Sidebar, FloatingChat, UI
│       ├── pages/                      # 대시보드·MES·비전·PDF·채팅 등
│       ├── store/                      # Zustand
│       ├── lib/                        # utils, geminiEnv
│       └── video-maker/                # 동영상 제작 모듈
│
├── backend/
│   ├── index.ts                        # Express 진입점
│   └── lib/db.ts                       # PostgreSQL Pool
│
├── api/routes/                         # REST API
│   ├── items.ts
│   ├── workResult.ts
│   ├── vision.ts
│   ├── chat.ts
│   ├── posts.ts
│   ├── feed.ts
│   ├── seed.ts
│   └── vectorizedTables.ts
│
├── database/
│   ├── init.ts                         # 서버 기동 시 스키마 생성
│   ├── schema/                         # SQL 참조
│   └── seeds/
│
├── ai/
│   ├── gemini/                         # modelConfig, service
│   ├── ocr/
│   └── vision/
│
├── scripts/
│   ├── setup-db.mjs                    # DB 생성 헬퍼
│   └── set-gemini-key.ps1              # Gemini Key 설정
│
└── shared/
    └── schema.ts                       # PDF/OCR 공유 타입
```

---

## ⚙️ 실행 방법

### 요구 사양

| 항목 | 사양 |
|------|------|
| Node.js | ≥ 20 |
| PostgreSQL | 16 권장 (로컬 또는 Docker) |
| 브라우저 | Chrome / Edge (카메라·AI 기능) |

### 1. 저장소 클론

```bash
git clone https://github.com/a3636a2000/AI-Smart-Factory-ERP.git
cd AI-Smart-Factory-ERP
npm install
```

### 2. 환경변수 설정

```bash
cp .env.example .env
```

`.env` 예시:

```env
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/ai_smart_factory_erp
GEMINI_API_KEY=your_gemini_api_key_here
PORT=5000
```

| 변수 | 설명 |
|------|------|
| `DATABASE_URL` | PostgreSQL 연결 (품목·실적·채팅·비전 로그) |
| `GEMINI_API_KEY` | PDF 고급 모드 · 동영상 AI 대본/TTS |
| `CLOUDINARY_URL` | (선택) 채팅 피드 이미지 업로드 |

### 3. PostgreSQL 준비

**옵션 A — 로컬 DB 스크립트**

```bash
npm run db:setup
```

**옵션 B — Docker Compose**

```bash
docker compose up -d
```

서버 기동 시 `database/init.ts`가 테이블을 자동 생성합니다.

### 4. Gemini API Key (선택)

1. [Google AI Studio](https://aistudio.google.com/apikey)에서 Key 발급  
2. `.env`에 `GEMINI_API_KEY` 입력 또는:

```bash
npm run gemini:set
```

### 5. 개발 서버 실행

```bash
npm run dev
```

| 서비스 | URL |
|--------|-----|
| Frontend | http://localhost:5173 |
| Backend API | http://localhost:5000 |
| Health | http://localhost:5000/api/health |

### 6. 프로덕션 빌드

```bash
npm run build
npm start
```

배포 상세는 [docs/deploy.md](docs/deploy.md)를 참고하세요.

---

## 🔒 민감 정보 처리

아래 항목은 `.gitignore`에 의해 저장소에서 제외됩니다.

| 파일 / 경로 | 설명 |
|-------------|------|
| `.env` | `DATABASE_URL`, `GEMINI_API_KEY` 등 실제 비밀값 |
| `.env.*` (`.env.example` 제외) | 로컬 환경 파일 |
| `node_modules/` | 의존성 |
| `dist/` | 빌드 산출물 |
| `uploads/` | 업로드 미디어 |

공개용 템플릿은 `.env.example`을 사용하세요.  
Gemini Key를 채팅·이슈에 노출한 경우 [AI Studio](https://aistudio.google.com/apikey)에서 재발급을 권장합니다.

---

## 📄 라이선스

이 프로젝트는 **한국품질재단(KFQ) 기업 연계** 목적의 스마트팩토리 ERP 코드입니다.  
저작권 © 정현민 · 한국품질재단(KFQ) AI 스마트팩토리 기업 연계 프로젝트

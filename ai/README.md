# AI 모듈

제조 AI 스마트팩토리 ERP의 AI 기능 모듈입니다.

## 구조

```
ai/
├── gemini/          # Google Gemini API (PDF 분석, 동영상 TTS·대본)
│   ├── modelConfig.ts
│   ├── service.ts
│   └── types.ts
├── ocr/             # Tesseract.js 한글 OCR (frontend/src/pages/ImageEditor.tsx)
└── vision/          # AI 비전 검사 UI + /api/vision 연동
```

## gemini

- **modelConfig** — 3단계 모델 티어 (경제적 / 표준 / 고성능)
- **service** — 슬라이드 대본 생성, TTS 음성 합성

## ocr

이미지 편집기에서 Tesseract.js로 뭉개진 한글 텍스트 인식·교체.

## vision

웹캠 기반 불량 감지 UI. ML 추론은 클라이언트 시뮬레이션 + PostgreSQL 로그 저장.

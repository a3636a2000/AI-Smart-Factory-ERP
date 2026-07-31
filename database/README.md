# Database

PostgreSQL 스키마 및 초기화 모듈입니다.

## 구조

```
database/
├── init.ts           # 서버 시작 시 테이블 자동 생성 (backend에서 호출)
├── schema/           # SQL 스키마 참조 문서
│   ├── 01_board.sql
│   ├── 02_chat.sql
│   ├── 03_feed.sql
│   └── 04_smart_factory.sql
└── seeds/
    └── sample.sql    # 샘플 데이터 (POST /api/seed)
```

## 주요 테이블

| 그룹 | 테이블 |
|------|--------|
| 게시판 | `posts`, `post_comments` |
| 채팅 | `chat_messages` |
| 피드 | `feed_posts`, `feed_comments`, `feed_votes`, `feed_reactions` |
| MES | `item_mst`, `emp_mst`, `work_performances`, `work_result_entries` |
| AI 비전 | `ai_vision_logs` |
| 품목 | `item_master` |
| AI 분석 | `vectorized_tables` |

## 연결

`backend/lib/db.ts`에서 `DATABASE_URL` 또는 `PG*` 환경변수로 연결합니다.

# R4mbb

보안과 취미에 대한 기록. [Astro](https://astro.build) + [Fuwari](https://github.com/saicaca/fuwari) 테마.

→ https://r4mbb.github.io

> 패키지 매니저는 **pnpm** 전용입니다. (`npm`/`yarn`은 거부됩니다.)

## 운영 커맨드

| 커맨드 | 용도 |
|--------|------|
| `pnpm install` | 의존성 설치 — 최초 1회, 또는 패키지 변경 후 |
| `pnpm dev` | 로컬 개발 서버 → http://localhost:4321 (저장하면 자동 반영) |
| `pnpm new-post <파일이름>` | 새 글 생성 (`src/content/posts/`에 front-matter 틀 자동 생성) |
| `pnpm build` | 프로덕션 빌드 + 검색 인덱스(pagefind) 생성 → `dist/` |
| `pnpm preview` | 빌드된 `dist/`를 로컬에서 미리보기 |
| `pnpm check` | Astro 타입·링크 점검 |
| `pnpm lint` | Biome 린트 (자동 수정) |
| `pnpm format` | Biome 포맷 |

## 글 쓰고 올리는 흐름

```bash
pnpm new-post my-first-post     # 1. 글 파일 생성
pnpm dev                        # 2. localhost:4321에서 쓰면서 확인
git add . && git commit -m "..." && git push   # 3. master에 push → 자동 배포
```

`master` 브랜치에 push 하면 GitHub Actions가 빌드·배포합니다 (`.github/workflows/deploy.yml`). 반영까지 보통 1~2분.

### front-matter

`pnpm new-post`로 만든 파일 맨 위를 채웁니다:

```yaml
---
title: 글 제목
published: 2026-06-17
description: 목록에 보일 한 줄 설명
tags: [pwn, ctf]
category: Reverse Engineering
draft: false
---
```

- `category`는 글당 하나, `tags`는 여러 개 — 같은 이름끼리 자동으로 묶입니다.
- `draft: true`면 빌드에서 빠집니다(임시 저장).
- `image: ./cover.png`처럼 넣으면 대표 이미지가 됩니다. 본문 이미지는 글과 같은 폴더에 두고 상대 경로로 참조합니다.

## 수정할 곳

| 무엇 | 파일 |
|------|------|
| 사이트 제목·프로필·소셜·메뉴·테마색 | `src/config.ts` |
| 소개(About) 페이지 | `src/content/spec/about.md` |
| 스타일 / 색상 변수 | `src/styles/` |

## 문제 해결

- 로컬 빌드에서 `markdown.css … link class does not exist` 에러가 나면 캐시 문제이니:
  ```bash
  rm -rf .astro node_modules/.vite && pnpm build
  ```
  (배포는 항상 클린 빌드라 영향 없습니다.)

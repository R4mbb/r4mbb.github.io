# R4mbb

보안과 취미에 대한 기록. [Astro](https://astro.build)와 [Fuwari](https://github.com/saicaca/fuwari) 테마로 만들었습니다.

→ https://r4mbb.github.io

## 글 쓰기

`src/content/posts/` 에 마크다운 파일을 추가하면 글이 됩니다. 틀을 자동으로 만들려면:

```bash
pnpm new-post 파일이름
```

생성된 파일 맨 위의 front-matter를 채웁니다:

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

- `category` 는 글 하나당 하나, `tags` 는 여러 개 답니다. 같은 이름끼리 자동으로 묶입니다.
- `draft: true` 인 글은 빌드에서 빠집니다.
- `image` 에 경로(`./cover.png` 등)를 넣으면 대표 이미지로 쓰입니다.
- 본문에 이미지를 쓸 때는 글과 같은 폴더에 두고 상대 경로로 참조합니다.

## 로컬에서 보기

```bash
pnpm install      # 최초 한 번
pnpm dev          # http://localhost:4321
```

빌드 결과를 그대로 확인하려면 `pnpm build` 후 `pnpm preview`.

## 배포

`master` 브랜치에 push 하면 GitHub Actions가 빌드해서 자동으로 배포합니다
(`.github/workflows/deploy.yml`). 반영까지 보통 1~2분 걸립니다.

## 수정할 곳

| 무엇 | 파일 |
|------|------|
| 사이트 제목·프로필·메뉴·테마색 | `src/config.ts` |
| 소개 페이지 | `src/content/spec/about.md` |
| 스타일 / 색상 변수 | `src/styles/` |

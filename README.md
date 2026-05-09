# JW Lee — Portfolio Site

## 파일 구조
```
portfolio/
├── index.html          ← 홈
├── projects.html       ← 프로젝트 목록
├── project-detail.html ← 프로젝트 세부
├── info.html           ← 인포 / 컨택트
├── css/
│   └── style.css       ← 전체 스타일 (컬러/폰트/간격)
├── js/
│   ├── media-config.js ← ✏️ 미디어·프로젝트 수정 파일
│   └── main.js         ← 유틸리티 (수정 불필요)
└── assets/             ← 이미지/영상 파일 여기에
```

---

## ✏️ 자주 수정하는 것들

### 1. 프로젝트 추가 / 수정
`js/media-config.js` 열고 `PROJECTS` 배열 수정.

**유튜브 embed:**
```js
hero: { type: "youtube", src: "https://www.youtube.com/watch?v=XXXXXXX", alt: "제목" }
```

**이미지:**
```js
thumb: { type: "image", src: "assets/project-thumb.jpg", alt: "설명" }
```

**로컬 영상:**
```js
hero: { type: "video", src: "assets/hero.mp4", alt: "제목" }
```

### 2. 배경색 / 컬러 변경
`css/style.css` 최상단 `:root` 블록:
```css
--bg:      #F5F2EC;   /* 메인 배경 — 베이지 */
--bg-card: #EFEAE0;   /* 카드/그리드 배경 */
--fg:      #1A1916;   /* 메인 텍스트 */
--muted:   #8A8378;   /* 서브 텍스트 */
--border:  #D6CFC2;   /* 라인 */
```

### 3. 이름 / 소개문 수정
- 이름: 각 HTML 파일의 `nav-logo`, `info-name` 텍스트
- 소개: `info.html`의 `info-bio` 단락
- 경력: `info.html`의 `.exp-row` 블록
- 컨택트 링크: `info.html`의 `.contact-link-row`

---

## Netlify 배포

1. GitHub 리포 생성 → 이 폴더 전체 push
2. netlify.com → "Import from Git" → 리포 선택
3. Build command: (비워두기)
4. Publish directory: `.` (루트)
5. Deploy → 완료

**Netlify Forms** (컨택트 폼): `info.html`의 form에 `data-netlify="true"` 이미 추가되어 있음. 배포 후 자동 활성화.

---

## 로컬 미리보기
VS Code에서 **Live Server** 확장 설치 후 `index.html` 우클릭 → Open with Live Server.

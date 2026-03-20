## 1. 프로젝트 초기 생성
가장 먼저 터미널에서 Vite의 React 템플릿을 사용하여 프로젝트 골격을 만듭니다.

```bash
# 프로젝트 생성 (프로젝트 명: my-dnd-app)
npm create vite@latest my-dnd-app

# 해당 폴더로 이동
cd my-dnd-app
```

## 2. 필요한 라이브러리 설치

```bash
# 기본 React 및 드래그 앤 드롭 라이브러리 설치
npm install react-dnd react-dnd-html5-backend
```

> **참고:** `react`와 `react-dom`은 `npm install` 과정에서 최신 버전(v19 이상)으로 자동 설치됩니다.

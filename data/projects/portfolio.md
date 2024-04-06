## 🌿 프로젝트 개요

> 간단한 소개와 다양한 프로젝트를 확인할 수 있는 포트폴리오 사이트입니다.

- **`진행 기간`**: 2024.03. ~ ing
- **`팀 구성`**: 개인
- **`깃허브 링크`**: https://github.com/sineTlsl/portfolio

## 🛠️ 기술 스택

- TypeScript
- Nextjs
- CSS Modules

## 🔥 성과

- Next.js를 처음 도입하여 서버 사이드 렌더링을 구현함으로써 페이지 로딩 속도 개선 및 SEO 최적화 하였습니다.
- CSS Modules를 활용하여 스타일링의 범위를 컴포넌트로 한정, CSS 클래스명 충돌을 방지하고 유지보수성 향상시켰습니다.

## ⚡️ 트러블 슈팅

### 1. Markdown 스타일 충돌 이슈

**[문제 상황]**

마크다운 파일을 적용할 때, **`global.css`** 의 전역 스타일로 인해 기존 태그들의 스타일링이 덮어 씌어지는 문제가 발생했습니다.

**[문제 해결]**

처음에는 MarkdownViewer의 개별 Module CSS를 생성하여 문제를 해결하려 했지만, 이는 **`global.css`** 에 정의된 전역 스타일에 의해 무시되는 상황이었습니다.
이 문제를 해결하기 위해 CSS의 **`revert`** 속성을 활용하여, **`MarkdownViewer`** 컴포넌트에 클래스로 적용을 시켜주었고 전역 스타일로부터 해당 컴포넌트의 스타일을 복원할 수 있었습니다.

```css
.no-global-styles div,
...,
.no-global-styles table {
  all: revert;
}
```

### 2. Next.js에서 GIF 이미지 최적화 이슈

**[문제 상황]**

Next.js의 이미지 최적화 기능은 애니메이션 GIF 파일이 해당되지 않아, 다음과 같은 경고가 발생했습니다.

```shell
The requested resource "***.gif" is an animated image so it will not be optimized. Consider adding the "unoptimized" property to the <Image>.
```

**[문제 해결]**

GIF 파일의 최적화 문제를 해결하기 위해, 이미지 파일이 GIF 형식인지를 먼저 판별하는 **`isGif`** 유틸 함수를 생성하였습니다.

```tsx
export const isGif = (src?: string): boolean => {
  const extension = src?.split('.').pop()?.toLowerCase();

  return extension === 'gif';
};
```

이 유틸 함수를 **`unoptimized={isGif(image.src)}`** 사용하여 이미지 최적화 과정을 건너뛰고, 원본 이미지를 직접 로드하도록 했습니다. 이 방식을 적용하여 GIF 파일을 웹사이트에서 문제 없이 사용할 수 있게 되었습니다.

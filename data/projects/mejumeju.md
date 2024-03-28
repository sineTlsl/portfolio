## 🌿 프로젝트 개요

![MejuMeju Preview](https://sieun-portfolio.s3.ap-northeast-2.amazonaws.com/mejumeju/mejumeju+preview.gif)

> 여러 주류에 대한 정보를 제공하고, 내 위치에서 가까운 매장을 보여주고, 사용자가 원하는 매장에서 픽업을 할 수 있는 웹 쇼핑몰 사이트입니다.

- **`팀 명`**: 주신사
- **`진행 기간`**: 2023.04. ~ 2023.05.
- **`팀 구성`**: 백엔드 3명, 프론트엔드 4명
- **`깃허브 링크`**: https://github.com/codestates-seb/seb43_main_006

## 🛠️ 기술 스택

- Typescript
- React
- Styled Components
- Redux Toolkit

## 🙋🏻‍♀️ 내가 기여한 부분

- 주류 상품 리스트 페이지
- 상품 디테일 이미지 작업
- 주류 상세 페이지
- 리뷰 (CRUD)

### 1. 주류 상품 리스트

![주류 상품 리스트 페이지](https://sieun-portfolio.s3.ap-northeast-2.amazonaws.com/mejumeju/alcohol+list+page.gif)

- 여러 주류 상품들을 한 페이지에 12개씩 보여주기 위하여 **페이지네이션**을 구현하였습니다.
- 주류 카테고리를 선택해서 해당하는 상품을 한눈에 확인할 수 있습니다.
- 사용자가 상품을 다양한 기준(최신순, 할인순, 낮은 가격순, 높은 가격순, 판매순)으로 정렬할 수 있게 하여, 사용자 경험을 향상시켰습니다.
- 사용자가 원하는 제품을 손쉽게 찾을 수 있도록 검색 기능을 추가하였습니다.

### 2. 상품 디테일 이미지 작업

![상품 포토샵 작업](https://sieun-portfolio.s3.ap-northeast-2.amazonaws.com/mejumeju/detail+image.png)

- 실제 상품을 판매하는 것처럼 각각의 주류 공식 홈페이지와 주류 정보들을 참고하여 저희 사이트만의 상품 이미지를 제작하였습니다.
- 기본적으로 모든 상품에 시작은 저희 매주매주 픽업 안내 방법을 제공하고 있습니다.

### 3. 주류 상세 페이지

![주류 상세 페이지](https://sieun-portfolio.s3.ap-northeast-2.amazonaws.com/mejumeju/detail+page.gif)

- 상품 상세를 자세하게 확인할 수 있는 페이지입니다.
- 상품의 가격, 현재 구매 가능한 수량, 사용자 리뷰 등 다양한 정보를 제공합니다.
- 동일 카테고리 내의 다른 주류 상품들을 추천해줍니다.

### 4. 리뷰 CRUD

![리뷰 CRUD](https://sieun-portfolio.s3.ap-northeast-2.amazonaws.com/mejumeju/review+CRUD.gif)

- 사용자는 텍스트 리뷰와 최대 3장의 이미지를 포함하여 리뷰를 작성할 수 있습니다.
- 페이지 내에서 리뷰를 더 읽고 싶은 사용자를 위해 리뷰 더보기 드롭다운 버튼을 구현하였습니다.

## 🔥 성과

1. 다양한 주류 정보의 제공을 통해 사용자들로부터 긍정적인 피드백을 받았으며, 사용자들이 원하는 주류를 더욱 빠르고 정확하게 찾을 수 있게 되었습니다.
2. 각 주류의 소개 이미지를 직접 디자인하여 실제 주류의 정보를 정확하고 생생하게 전달할 수 있었습니다.

## ⚡️ 트러블 슈팅

### 상품 정렬 로직의 리팩토링

주류 리스트 페이지에서 사용자가 상품을 페이지네이션과 함께 다양한 정렬 기준으로 정렬할 수 있도록 구현했습니다.

**[문제 상황]**

초기 구현에는 페이지네이션과 정렬을 한번에 요청하는 과정에서 비효율적으로 **`if`**, **`else if`** 조건문을 지속적으로 사용하였습니다. 이때, 사용했던 방식은 정렬의 기준이 추가될 때마다 조건문을 계속해서 확장해야했으며, 이로 인해 코드의 가독성과 유지보수성이 저하되는 문제점이 있었습니다.

```tsx
const [sortTab, setSortTab] = useState<SortItemType>('최신순');

// 사용자에게 보여주는 정렬 name
const sortItems: SortItemType[] = [
  '최신순',
  '할인순',
  '낮은 가격순',
  '높은 가격순',
  '판매순',
];

// 사용자가 정렬 item을 클릭했을 때 발생하는 이벤트
const handleClickSortItems = (item: SortItemType): void => {
  setSortTab(item);
  setIsSortTab(false);

  if (item === '할인순') {
    setSortBy('discountRate');
  } else if (item === '높은 가격순') {
    setSortBy('highPrice');
  } else if (item === '낮은 가격순') {
    setSortBy('lowPrice');
  } else if (item === '판매순') {
    setSortBy('sales');
  } else {
    setSortBy('latest');
  }
};
```

**[문제 해결 과정]**

코드의 가독성과 유지보수성을 개선하기 위해, **`if`**, **`else if`** 조건문 대신 인덱스 시그니처와 유사한 기능을 하는 **`Record`** 타입을 활용한 리팩토링을 진행하기로 결정했습니다.

타입스크립트의 **`Record`** 유틸리티 타입을 사용함으로써, 정렬 기준을 키로 하고 해당하는 정렬 파라미터를 값으로 하는 객체를 생성하여, 동적으로 정렬 기준을 관리할 수 있게 되었습니다.

```tsx
const SortItemType = [
  '최신순',
  '할인순',
  '낮은 가격순',
  '높은 가격순',
  '판매순',
];
type SortItem = (typeof SortItemType)[number];

const sortOptions: Record<SortItem, string> = {
  최신순: 'latest',
  할인순: 'discountRate',
  '낮은 가격순': 'lowPrice',
  '높은 가격순': 'highPrice',
  판매순: 'sales',
};
```

**[얻은 교훈]**

**`Record`** 타입을 사용한 리팩토링을 통해 새로운 정렬 기준을 추가하는 것이 이전보다 훨씬 간단해졌으며, 코드의 확장성이 향상되었습니다. 또한, 타입스크립트를 처음 사용한 프로젝트였기 때문에 좀 더 타입의 대한 깊은 이해가 생기게 되는 좋은 계기가 되었습니다.

## SSK 병아리 🐥

[SSK 병아리] frontend 레포지토리

### 브랜치 전략

Lightweight Branching Model

* Feature Branch 

  - 새로운 기능을 추가하는 경우, Feature/[기능이름] 의 형태로 develop 브랜치에서 분기합니다.
  
  - 기능의 단위가 크거나 같은 기능을 여러 단위로 쪼개는 경우 기능 이름 뒤에 순차적으로 넘버를 붙이도록 합니다.
  
* Fix Branch

  - 기존 기능을 수정할 경우, Fix/[수정한 기능이름] 의 형태로 develop 브랜치에서 분기합니다.
  
* Develop Branch 

  - feature 브랜치에서 작업한 후 테스팅을 거친 뒤, develop 브랜치로 PR 을 날립니다. 
  
  - 빌드에 실패하거나, 테스트를 거치지 않은 경우 PR 을 닫아주세요.

* Master Branch

  - master 브랜치로 push 할 정도로 검증이 된 코드만 master 브랜치로 push 합니다. 
  
  - Master 브랜치로의 PR 과 merge 는 대면 정기 미팅에서 충분한 검토를 거친 뒤, 수행하도록 합니다.
  
1. local에 repository clone
2. git checkout -b Feature/my-branch
  - ex) Feature/home-button
3. git add .
4. git commit -m "commit컨벤션 참고"
5. git push origin Feature/my-branch
6. git hub 풀리퀘, 머지
7. git checkout master
8. git pull origin master
---
### 커밋 컨벤션

카테고리: 설명 순서로 기입 태그의 첫글자는 소문자를 쓴다.


- feat: 기능 추가인 경우
- fix: 기존 코드를 수정하는 경우
- design: UI만 수정하는 경우
- refac: 기존 코드를 (기능변경 없이) 리팩토링하는 경우
- test: 테스크 코드를 추가하는 경우
- style: 공란, 빈 줄 제거 등 단순히 코드가 보여지는 방식만 수정하는 경우
- comment: 주석만 변경/추가/제거한 경우

ex) feat/홈 버튼 추가

---

### 머지 전략

#### Squash and Merge
feature 브랜치의 커밋 내용을 합쳐 새로운 단일 커밋으로 만든 후 중심 브랜치에 병합한다. 커밋 히스토리 그래프의 가독성을 높이기 위함이다. 일반적인 머지 전략에 비해 정보력이 떨어진다는 단점이 있기 때문에 각 브랜치의 작업 단위는 light하게 설계한다.

머지 예시
> feature 브랜치에서 작업한 커밋이 여러 개일 경우, feature 브랜치의 이름으로 스쿼시된 후 머지되며 커밋의 이름들이 세부 내용으로 남는다.

```
Feature  <= 브랜치 이름

* feature: reset css 적용

* feature: Headcomponet 추가

* feature: HeadcomponetCss 추가

```
<img width="729" alt="스크린샷 2022-11-29 23 15 31" src="https://user-images.githubusercontent.com/110515401/204552979-7de9e25d-be13-4045-a9cd-0d469a149b1a.png">

사진의 자세한 내용

```  
만약 커밋 내용이 여러개일 경우 브랜치는 Feature로 생성하고 이 칸에 commit 내용을 써주면 됩니다

주의사항: Feature 기능만 commit을 추가하는 것이지 Fix 브랜치로 올려야 할 때는 나누어 올려야 합니다
---------------------
올바른 예시

feature: master branch push 막기

feature: intro 페이지 추가
----------------------
잘못된 예시

feature: master branch push 막기

fix: intro 페이지 수정
```

---

### PR & Merge

- merge 된 모든 feature 브랜치는 **원격 feature 브랜치 제거, 로컬 feature 브랜치 제거**
- PR 을 생성할 때에는 본인을 담당자로 지정합니다. 또한 업무와 관련있는 사람을 리뷰어로 등록합니다. 리뷰어는 최소 한명을 지정하도록 합니다.
- 리뷰어로 지정을 받은 사람은 12시간 안에 코멘트를 남기도록 합니다.
- 본인이 생성한 PR 에 대해서는 본인이 머지를 수행하도록 합니다.
- PR 의 단위는 light 하게 설계합니다.

---

### 네이밍 규칙

component와 styled-component를 구분 짓기 위해 네이밍 규칙을 임의로 만들었습니다

**렌더링 되는 컴포넌트 이름은 파일이름과 같게 짓습니다**

```
파일이름: main

컴포넌트 이름: main
```

>앞 component와 styled-componet를 구분 짓는 C / S는 대문자

>간단한 기능이름: CamelCase

>태그 이름 대문자

* component

```
C 간단한 기능이름

CMain

```

* styled-component

```
S 간단한 기능이름 태그

SMainD
```

뒤에 태그 같은 경우에는 태그 앞 스펠링을 따와 적는 것으로 하겠습니다

* 최상단 부모 컴포넌트

뒤 태그이름이 아닌 container 혹은 layout을 집어넣습니다

```
CMainContainer
```

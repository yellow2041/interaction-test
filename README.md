## HoverAccordion

### 사용 예시

```tsx
      <HoverAccordion
        items={tmpHoverAccordionItems}
        type={HoverAccordionType.LEFT}
      />
      <HoverAccordion
        items={tmpHoverAccordionItems}
        type={HoverAccordionType.RIGHT}
        itemSize={{ width: 50, height: 50 }}
      />
      <HoverAccordion items={tmpHoverAccordionItems} />
      <HoverAccordion
        items={tmpHoverAccordionItems}
        itemSize={{ width: 100, height: 100 }}
      />
      <HoverAccordion>{tmpChildren}</HoverAccordion>
```

### 고려사항

- 사용자가 어느정도까지 커스텀할지 고민 필요
  - interaction 시 css 변화 등

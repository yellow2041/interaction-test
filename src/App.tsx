import styled from "styled-components";
import HoverAccordion, {
  HoverAccordionType,
  Item,
} from "./components/HoverAccordion";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;

const tmpHoverAccordionItems: Item[] = [
  { key: 0, src: "https://image.bugsm.co.kr/album/images/500/1512/151262.jpg" },
  { key: 1, src: "https://image.bugsm.co.kr/album/images/500/317/31739.jpg" },
  {
    key: 2,
    src: "https://media.ktown4u.com/products/resize/thumbnail/2023/11/06/TOZb6G.jpg",
  },
  {
    key: 3,
    src: "https://image.bugsm.co.kr/album/images/500/40827/4082766.jpg",
  },
  {
    key: 4,
    src: "https://i0.wp.com/m.izm.co.kr/wp-content/uploads/2021/09/600_210912_%EB%84%AC_Moments-in-between.jpg?fit=580%2C580&ssl=1",
  },
];

const TmpChildItem = styled.div<{ $backgroundColor: string }>`
  width: 150px;
  height: 200px;
  margin-right: -50px;
  border: 3px solid skyblue;
  background-color: ${(props) => props.$backgroundColor};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
`;

const tmpChildren = [0, 0, 0, 0, 0, 0, 0].map(() => (
  <TmpChildItem
    $backgroundColor={`#${Math.round(Math.random() * 0xffffff).toString(16)}`}
  />
));

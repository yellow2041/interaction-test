import styled from "styled-components";

export interface Item {
  key: string | number;
  src: string;
}
export enum HoverAccordionType {
  CENTER = "center",
  LEFT = "flex-start",
  RIGHT = "flex-end",
}

interface IHoverAccordion {
  items?: Item[];
  itemSize?: { width: number; height: number };
  type?: HoverAccordionType;
  children?: JSX.Element[];
}

const HoverAccordion = ({
  items,
  itemSize,
  type = HoverAccordionType.CENTER,
  children,
}: IHoverAccordion) => {
  return (
    <AccordionArea $type={type}>
      {children ||
        items?.map((item) => (
          <Item
            key={item.key}
            src={item.src}
            $width={itemSize?.width}
            $height={itemSize?.height}
          />
        ))}
    </AccordionArea>
  );
};

export default HoverAccordion;

const AccordionArea = styled.div<{
  $type: HoverAccordionType;
  $width?: number;
}>`
  display: flex;
  justify-content: ${(props) => props.$type};
  align-items: center;
  margin-right: 5rem;
  &:hover
    *${(props) =>
      props.$type === HoverAccordionType.RIGHT && ":not(:last-child)"} {
    transition: margin-right ease 0.3s 0s;
    margin-right: 3px;
  }
`;

const Item = styled.img<{ $width?: number; $height?: number }>`
  width: ${(props) => props.$width ?? 24}px;
  height: ${(props) => props.$height ?? 24}px;
  margin-right: -${(props) => (props.$width ? props.$width / 3 : 8)}px;
  border-radius: 50%;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
`;

import { Space, Typography } from "antd";
import { ReactNode } from "react";

const { Text } = Typography;

interface ITextElement {
  className?: string;
  children: ReactNode;
  bold?: string;
  isBlock?: boolean;
  type?:
    | "title"
    | "subTitle"
    | "content"
    | "secondary"
    | "link"
    | "danger"
    | "light"
    | "disable"
    | "disableIcon";
  color?:
    | "white"
    | "black"
    | "gray"
    | "app"
    | "primary"
    | "success"
    | "light"
    | string;
  weight?: "regular" | "medium" | "bold" | "thin";
  verticalAlign?: "center";
  size?: 1 | 2 | 3 | 4 | 5 | string;
  align?: "center" | "right" | "left" | "justify";

  ref?: React.Ref<any>;
  wrap?: "nowrap" | "pre-line";
  breakOnAll?: boolean;
}

const TextElement = ({
  children,
  size = "sm",
  color = "default",
  bold = "nobold",
  isBlock = false,
  className,

  type,
  weight,
  verticalAlign,

  align,
  ref,
  wrap,
  breakOnAll,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & ITextElement) => (
  <Space style={{ display: isBlock ? "block" : "inline-block" }}>
    <Text
      className={`text_size${size} text_color${color} text_bold${bold}   ${className}`}
      {...props}
    >
      {children}
    </Text>
  </Space>
);

export default TextElement;

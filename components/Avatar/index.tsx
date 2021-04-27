import { FC } from "react";
import Styles from "./styles";
import { AvatarProps } from "./types";

const Avatar: FC<AvatarProps> = ({ name, image }: AvatarProps) => (
  <Styles.Avatar>
    <img alt={name} src={image} />
  </Styles.Avatar>
);

export default Avatar;

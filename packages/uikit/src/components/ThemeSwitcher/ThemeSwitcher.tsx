import { memo } from "react";
import { SunIcon, MoonIcon } from "../Svg";
import { Toggle } from "../Toggle";

export interface Props {
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
}

const ThemeSwitcher: React.FC<Props> = ({ isDark, toggleTheme }) => (
  <Toggle
    checked={isDark}
    defaultColor="primary"
    checkedColor="primary"
    onChange={() => toggleTheme(!isDark)}
    scale="md"
    startIcon={(isActive = false) => <SunIcon color={isActive ? "warning" : "backgroundAlt"} />}
    endIcon={(isActive = false) => <MoonIcon color={isActive ? "secondary" : "backgroundAlt"} />}
  />
);

export default memo(ThemeSwitcher, (prev, next) => prev.isDark === next.isDark);

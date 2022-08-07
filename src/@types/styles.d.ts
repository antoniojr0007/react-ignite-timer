import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

interface DefaultThemeProps {
  colors: string[]
}

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme<DefaultThemeProps> extends ThemeType {}
}

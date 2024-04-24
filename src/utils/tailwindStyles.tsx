import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config';

const fullConfig = resolveConfig(tailwindConfig);

export const COLORS = {
    primary: fullConfig.theme?.colors?.primary.toString(),
    secondary: fullConfig.theme?.colors?.secondary.toString(),
    dark: fullConfig.theme?.colors?.dark.toString(),
    light: fullConfig.theme?.colors?.light.toString(),
}
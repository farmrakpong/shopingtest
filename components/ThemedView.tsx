import { View, type ViewProps } from 'react-native';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({ style, ...otherProps }: ThemedViewProps) {
  const backgroundColor = '#FFFFFF'; // ใช้สีขาวเป็นค่าเริ่มต้น

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}

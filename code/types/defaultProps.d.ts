// Type definitions for React component's defaultProps
// TypeScript Version: 3.0

export type PickDefaultProps<Props, defaultPropsKeys extends keyof Props> = Readonly<Required<{
  [P in defaultPropsKeys]: Props[P]
}>>;

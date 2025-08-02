import type { ComponentProps, ReactNode } from 'react';

import { UiText } from '../../ui/text';

type ShadType = ComponentProps<typeof UiText>;

interface TextDefaultProps extends ShadType {
  children: ReactNode;
  className?: string;
}

export default function TextDefault({
  children,
  className,
  ...rest
}: TextDefaultProps) {
  return (
    <UiText className={className} {...rest}>
      {children}
    </UiText>
  );
}

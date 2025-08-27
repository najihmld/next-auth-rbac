'use client';

import { ReactElement, ReactNode, cloneElement, isValidElement } from 'react';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useAuthStore } from '@/stores/use-auth-store';

type CanProps<T extends object = any> = {
  permission: string;
  disableInstead?: boolean;
  showTooltip?: string; // kalau disable → kasih tooltip
  children: ReactNode;
  fallback?: ReactNode;
};

export function Can<
  T extends { disabled?: boolean; style?: React.CSSProperties },
>({
  permission,
  disableInstead = false,
  showTooltip,
  children,
  fallback,
}: CanProps<T>) {
  const hasPermission = useAuthStore((state) =>
    state.hasPermission(permission)
  );

  // kondisi tidak ada permission
  if (!hasPermission) {
    if (disableInstead && isValidElement(children)) {
      const disabledChild = cloneElement(children as ReactElement<any>, {
        disabled: true,
        style: {
          ...(children.props as any).style,
          cursor: 'not-allowed',
          opacity: 0.5,
        },
      });

      // kalau ada showTooltip → bungkus pakai span dengan title
      return showTooltip ? (
        <Tooltip>
          <TooltipTrigger>{disabledChild}</TooltipTrigger>
          <TooltipContent>
            <p>{showTooltip}</p>
          </TooltipContent>
        </Tooltip>
      ) : (
        disabledChild
      );
    }

    return <>{fallback}</>;
  }

  // kalau punya akses
  return <>{children}</>;
}

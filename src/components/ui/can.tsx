'use client';

import { ReactElement, ReactNode, cloneElement, isValidElement } from 'react';

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { useAuthStore } from '@/stores/use-auth-store';

/* eslint-disable @typescript-eslint/no-explicit-any */

type CanProps = {
  permission: string;
  disableInstead?: boolean;
  showTooltip?: string; // kalau disable → kasih tooltip
  children: ReactNode;
  fallback?: ReactNode;
};

export function Can({
  permission,
  disableInstead = false,
  showTooltip,
  children,
  fallback,
}: CanProps) {
  const hasPermission = useAuthStore((state) =>
    state.hasPermission(permission)
  );

  // kondisi tidak ada permission
  if (!hasPermission) {
    if (disableInstead && isValidElement(children)) {
      const disabledChild = cloneElement(children as ReactElement<any>, {
        disabled: true,
        style: {
          ...(children.props as React.ButtonHTMLAttributes<HTMLButtonElement>)
            .style,
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

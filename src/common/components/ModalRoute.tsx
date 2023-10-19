"use client";
import { useCallback, useRef, useEffect, MouseEventHandler } from "react";
import { useRouter } from "next/navigation";
import {Box} from '@mui/material';

export default function Modal({ children }: { children: React.ReactNode }) {
  const overlay = useRef(null);
  const wrapper = useRef(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClick: MouseEventHandler = useCallback(
    (e) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        if (onDismiss) onDismiss();
      }
    },
    [onDismiss, overlay, wrapper]
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  return (
    <Box
      ref={overlay}
      sx={{
        position: 'fixed',
        zIndex: 10,
        left: 0,
        top: 0,
        botton: 0,
        right: 0,
        mx: 'auto',
        backgroundColor: '#00000099'
      }}
      zIndex={10}
      onClick={onClick}
    >
      <Box
        sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            translate: '-50%, 50%',
            width: {
                sx: '100%',
                md: '75%',
                lg: '50%'
            },
            padding: 3
        }}
        ref={wrapper}
      >
        {children}
      </Box>
    </Box>
  );
}

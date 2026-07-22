import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";

interface ManusDialogProps {
  title?: string;
  logo?: string;
  logoAlt?: string;
  description?: string;
  loginLabel?: string;
  open?: boolean;
  onLogin: () => void;
  onOpenChange?: (open: boolean) => void;
  onClose?: () => void;
}

export function ManusDialog({
  title,
  logo,
  logoAlt = "Dialog graphic",
  description = "Please log in to continue",
  loginLabel = "Log in",
  open = false,
  onLogin,
  onOpenChange,
  onClose,
}: ManusDialogProps) {
  const [internalOpen, setInternalOpen] = useState(open);

  useEffect(() => {
    if (!onOpenChange) {
      setInternalOpen(open);
    }
  }, [open, onOpenChange]);

  const handleOpenChange = (nextOpen: boolean) => {
    if (onOpenChange) {
      onOpenChange(nextOpen);
    } else {
      setInternalOpen(nextOpen);
    }

    if (!nextOpen) {
      onClose?.();
    }
  };

  return (
    <Dialog
      open={onOpenChange ? open : internalOpen}
      onOpenChange={handleOpenChange}
    >
      <DialogContent className="w-[400px] gap-0 rounded-[20px] border border-[rgba(0,0,0,0.08)] bg-[#f8f8f7] p-0 py-5 text-center shadow-[0px_4px_11px_0px_rgba(0,0,0,0.08)] backdrop-blur-2xl">
        <div className="flex flex-col items-center gap-2 p-5 pt-12">
          {logo ? (
            <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-[rgba(0,0,0,0.08)] bg-white">
              <img src={logo} alt={logoAlt} className="h-10 w-10 rounded-md" />
            </div>
          ) : null}

          {title ? (
            <DialogTitle className="text-xl font-semibold leading-[26px] tracking-[-0.44px] text-[#34322d]">
              {title}
            </DialogTitle>
          ) : null}
          <DialogDescription className="text-sm leading-5 tracking-[-0.154px] text-[#858481]">
            {description}
          </DialogDescription>
        </div>

        <DialogFooter className="px-5 py-5">
          <Button
            onClick={onLogin}
            className="h-10 w-full rounded-[10px] bg-[#1a1a19] text-sm font-medium leading-5 tracking-[-0.154px] text-white hover:bg-[#1a1a19]/90"
          >
            {loginLabel}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

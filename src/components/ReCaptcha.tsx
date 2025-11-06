
import React, { forwardRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

interface ReCaptchaProps {
  onChange: (token: string | null) => void;
}

const ReCaptcha = forwardRef<ReCAPTCHA, ReCaptchaProps>(({ onChange }, ref) => {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  if (!siteKey) {
    console.error("NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not set.");
    return null;
  }

  return (
    <ReCAPTCHA
      ref={ref}
      sitekey={siteKey}
      onChange={onChange}
    />
  );
});

ReCaptcha.displayName = "ReCaptcha";

export default ReCaptcha;

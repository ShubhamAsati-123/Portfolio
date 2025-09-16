"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense } from "react";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

function AnalyticsContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Google Analytics 4
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", "GA_MEASUREMENT_ID", {
        page_path: pathname,
        page_title: document.title,
        page_location: window.location.href,
      });
    }

    // Performance monitoring with proper error handling
    if (typeof window !== "undefined" && "performance" in window) {
      // Core Web Vitals with dynamic import and error handling
      import("web-vitals")
        .then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
          // Only call functions if they exist
          if (getCLS && typeof getCLS === "function") {
            getCLS((metric) => {
              console.log("CLS:", metric);
            });
          }
          if (getFID && typeof getFID === "function") {
            getFID((metric) => {
              console.log("FID:", metric);
            });
          }
          if (getFCP && typeof getFCP === "function") {
            getFCP((metric) => {
              console.log("FCP:", metric);
            });
          }
          if (getLCP && typeof getLCP === "function") {
            getLCP((metric) => {
              console.log("LCP:", metric);
            });
          }
          if (getTTFB && typeof getTTFB === "function") {
            getTTFB((metric) => {
              console.log("TTFB:", metric);
            });
          }
        })
        .catch((error) => {
          console.warn("Web Vitals not available:", error);
        });
    }

    // Custom event tracking
    console.log(
      `Page view: ${pathname}${searchParams ? `?${searchParams}` : ""}`
    );
  }, [pathname, searchParams]);

  return (
    <>
      {/* Google Analytics - Only render in production */}
      {process.env.NODE_ENV === "production" && (
        <>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'GA_MEASUREMENT_ID', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>
      )}
    </>
  );
}

export function Analytics() {
  return (
    <Suspense fallback={null}>
      <AnalyticsContent />
    </Suspense>
  );
}

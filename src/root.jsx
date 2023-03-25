// @refresh reload
import { Suspense } from "solid-js";
import {
  useLocation,
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import Sidebar from "./components/molecules/Sidebar";
import "./root.css";
export default function Root() {
  const location = useLocation();
  const active = (path) =>
    path == location.pathname
      ? "border-sky-600"
      : "border-transparent hover:border-sky-600";
  return (
    <Html lang="en">
      <Head>
        <Title>UtiliTool</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <Meta></Meta> */}
      </Head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9580106986509970"
          crossorigin="anonymous"></script>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;800&display=swap');
      </style>
      <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
      <Body style="background: linear-gradient(to right bottom, #141115 50%, #0b0a0c);">
        <Suspense>
          <ErrorBoundary>
            <Sidebar/>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>

    </Html>
  );
}

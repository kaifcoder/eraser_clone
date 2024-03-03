import { withAuth } from "@kinde-oss/kinde-auth-nextjs/middleware";
export default function middleware(req: Request) {
  return withAuth(req);
}
export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/:path*",
    "/team/create",
    "/team/create/:path*",
    "/workspace/:fileId*",
  ],
};

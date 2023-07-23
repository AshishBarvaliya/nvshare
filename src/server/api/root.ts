import { organizationRouter } from "~/server/api/routers/organization";
import { projectRouter } from "~/server/api/routers/project";
import { environmentRouter } from "~/server/api/routers/environment";
import { commitRouter } from "~/server/api/routers/commit";
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  organization: organizationRouter,
  project: projectRouter,
  environment: environmentRouter,
  commit: commitRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

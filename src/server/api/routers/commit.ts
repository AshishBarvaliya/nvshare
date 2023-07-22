import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";

export const commitRouter = createTRPCRouter({
  get: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      const commit = await ctx.prisma.commit.findUnique({
        where: {
          id: input.id,
        },
      });

      return commit;
    }),

  getAll: protectedProcedure.query(async ({ ctx }) => {
    const commits = await ctx.prisma.commit.findMany()

    return commits;
  }),

  create: protectedProcedure.input(z.object({ userId: z.string(), organizationId: z.string(), projectId: z.string(), environmentId: z.string(), message: z.string(), version: z.string() })).mutation(
    async ({ input, ctx }) => {
      const commit = await ctx.prisma.commit.create({
        data: {
          userId: input.userId,
          organizationId: input.organizationId,
          projectId: input.projectId,
          environmentId: input.environmentId,
          message: input.message,
          version: input.version
        },
      });

      return commit;
    }
  )
});

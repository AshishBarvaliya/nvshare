import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";

export const environmentRouter = createTRPCRouter({
  get: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      const environment = await ctx.prisma.environment.findUnique({
        where: {
          id: input.id,
        },
      });

      return environment;
    }),

  getAll: protectedProcedure.query(async ({ ctx }) => {
    const environments = await ctx.prisma.environment.findMany()

    return environments;
  }),

  create: protectedProcedure.input(z.object({ rootUserId: z.string(), projectId: z.string(), name: z.string(), version: z.string() })).mutation(
    async ({ input, ctx }) => {
      const environment = await ctx.prisma.environment.create({
        data: {
          rootUserId: input.rootUserId,
          projectId: input.projectId,
          name: input.name,
        },
      });

      return environment;
    }
  )
});

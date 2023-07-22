import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";

export const organizationRouter = createTRPCRouter({
  get: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      const organization = await ctx.prisma.organization.findUnique({
        where: {
          id: input.id,
        }
      });

      return organization;
    }),

  getAll: protectedProcedure.query(async ({ ctx }) => {
    const organizations = await ctx.prisma.organization.findMany()

    return organizations;
  }),

  create: protectedProcedure.input(z.object({ name: z.string(), userId: z.string() })).mutation(
    async ({ input, ctx }) => {
      const organization = await ctx.prisma.organization.create({
        data: {
          name: input.name,
          userId: input.userId
        },
      });

      return organization;
    }
  )
});

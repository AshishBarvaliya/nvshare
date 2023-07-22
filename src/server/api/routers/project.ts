import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
} from "~/server/api/trpc";

export const projectRouter = createTRPCRouter({
  get: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => {
      const project = await ctx.prisma.project.findUnique({
        where: {
          id: input.id,
        },
        include: {
          rootUser: true,
          organization: true,
        },
      });

      return project;
    }),

  getAll: protectedProcedure.query(async ({ ctx }) => {
    const projects = await ctx.prisma.project.findMany()

    return projects;
  }),

  create: protectedProcedure.input(z.object({ name: z.string(), organizationId: z.string(), rootUserId: z.string() })).mutation(
    async ({ input, ctx }) => {
      const project = await ctx.prisma.project.create({
        data: {
          name: input.name,
          organizationId: input.organizationId,
          rootUserId: input.rootUserId
        },
      });

      return project;
    }
  )
});

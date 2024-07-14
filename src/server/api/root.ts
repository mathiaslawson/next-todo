import { createCallerFactory, createTRPCRouter } from "~/server/api/trpc";
import { todoRouter } from "./routers/todo";
import AppRouter from "next/dist/client/components/app-router";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  tofo: todoRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

console.log(typeof appRouter, 'this is the type of app router')

/**
 * Create a server-side caller for the tRPC API.
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
export const createCaller = createCallerFactory(appRouter);

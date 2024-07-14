import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const todoRouter = createTRPCRouter({
   all: protectedProcedure.query(async ({ctx}) => {
      const todos = await ctx.db.todo.findMany({
         where: {
            userId: ctx.session.user.id
         },
      });

      console.log('todos from prsima', todos.map(({id, text, done}) => ({id, text, done})))
      

     return [{
        id: 'fake', 
        text: 'fak text', 
        done: false
     }, 
     {
        id: 'fake2', 
        text: 'fak text2', 
        done: true
     }]
   }),


   
});

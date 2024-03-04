import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
export const createNewFile = mutation({
  args: {
    fileName: v.string(),
    teamId: v.string(),
    createdBy: v.string(),
    archieved: v.boolean(),
    document: v.string(),
    whiteboard: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("files", args);
  },
});

export const getFiles = query({
  args: {
    teamId: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("files")
      .filter((q) => q.eq(q.field("teamId"), args.teamId))
      .order("desc")
      .collect();
  },
});

export const updateDocument = mutation({
  args: {
    _id: v.id("files"),
    document: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.patch(args._id, { document: args.document });
  },
});

export const updateWhiteboard = mutation({
  args: {
    _id: v.id("files"),
    whiteboard: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.patch(args._id, { whiteboard: args.whiteboard });
  },
});

export const getFilebyId = query({
  args: {
    _id: v.id("files"),
  },
  handler: async (ctx, args) => {
    return await ctx.db.get(args._id);
  },
});

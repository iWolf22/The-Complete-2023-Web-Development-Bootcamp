// Without a defined matcher, this one line applies next-auto
// to the entire project

export { default } from "next-auth/middleware";

// Applies next-auth only to matching routes - can be regex (matcher)
export const config = { matcher: ["/extra", "/dashbaord"]};
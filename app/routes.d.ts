declare module "routes-gen" {
  export type RouteParams = {
    "/": Record<string, never>;
    "/dogs": Record<string, never>;
  };

  export function route<
    T extends
      | ["/"]
      | ["/dogs"]
  >(...args: T): typeof args[0];
}

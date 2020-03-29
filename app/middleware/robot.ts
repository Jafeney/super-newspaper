import { Context } from 'egg';

interface Options {
  ua: string[];
}

export default function robotMiddleware(options: Options): any {
  return async (ctx: Context, next: () => Promise<any>) => {
    const source = ctx.get('user-agent') || '';
    const match = options.ua.some((ua: any) => ua.test(source));
    if (match) {
      ctx.status = 403;
      ctx.message = 'Go away, robot.';
    } else {
      await next();
    }
  };
}

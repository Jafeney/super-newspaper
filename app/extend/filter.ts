import * as moment from 'moment';

export function relativeTime(time?: number) {
  const t = time || 0;
  return moment(new Date(t * 1000)).fromNow();
}

export function domain(url: string) {
  return url && url.split('/')[2];
}

import { from, mergeMap, interval, retry } from 'rxjs';
import { map } from 'rxjs/operators';
import axios from 'axios';

const getApiData = () => {
  return interval(3000).pipe(
    mergeMap(n => from(axios.get('https://httpbin.org/status/[status_code]'))),
    map(response => {
        response.data
    }),
    retry(2)
  )
}

getApiData().subscribe({
    next: data => console.log(data),
    error: err => console.log(`${err}: Retried 3 times...`)
});

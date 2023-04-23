import { from, skip, mergeMap, interval, take } from 'rxjs';
import { map } from 'rxjs/operators';
import axios from 'axios';

const getApiData = () => {
  return interval(3000).pipe(
    take(11),
    skip(1),
    mergeMap(n => from(axios.get('https://jsonplaceholder.typicode.com/users/' + n))),
    map(response => response.data)
  )
}

getApiData().subscribe(data => console.log(data));

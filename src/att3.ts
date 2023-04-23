import { from, skip, mergeMap, interval, take } from 'rxjs';
import { map } from 'rxjs/operators';
import axios from 'axios';

const getApiData = () => {
  return interval(10000).pipe(
    take(100),
    skip(1),
    mergeMap(n => from(axios.get('https://dummyjson.com/products/' + Math.floor(Math.random() * 100)))),
    map(response => response.data)
  )
}

getApiData().subscribe(data => console.log(data));

import { from, skip, mergeMap, interval, take, bufferCount, tap } from 'rxjs';
import { map } from 'rxjs/operators';
import axios from 'axios';

const getApiData = () => {
  return interval(1000).pipe(
    take(100),
    skip(1),
    mergeMap(n => from(axios.get('https://dummyjson.com/products/' + Math.floor(Math.random() * 100)))),
    map(response => response.data),
    tap(console.log),
    bufferCount(3),
    map((x) => {(x[0].price + x[1].price + x[2].price) / 3})
  )
}

getApiData().subscribe(data => console.log(
    `Média de preço dos últimos 3 produtos: ${data}`
));

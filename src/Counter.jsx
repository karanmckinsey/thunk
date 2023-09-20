import { useDispatch, useSelector } from "react-redux";
import { getResult } from './store/actions/counter';

export function Counter() {
    const { counter: { count, results, loading } } = useSelector(state => state);
    const dispatch = useDispatch();
    
    const handleIncrement = () => {
        dispatch(getResult(count+1));
    };

    if (loading) return <h1>Loading...</h1>

    return <>
        <h1>COUNT: {count}</h1>
        <ul>
            {results.map((r, i) => <li key={i}>{r.title}</li>)}
        </ul>
        <button onClick={handleIncrement}>Inc</button>
    </>
}
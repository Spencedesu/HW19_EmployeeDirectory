This project shows looping to display random users.

The React project uses a functional component via the following syntax:
```  
function App() {
}
```

State is available via the useState method.
```
const [personsState, setPersonsState] = useState([]);
```


Using this approach, state is set/updated via the "setPersonsState()" method
```
setPersonsState(someArrayValue);
```


Get the value of a state variable via
```
{personsState}
```

Make the state variables via prop-drilling
```
PROVIDER
<TableBody content={personsState} />
```

```
CONSUMER
const TableBody = (props) => { 
    return (
        <div>{props.content}</div>
    )
}
```
## Useage

```
import {withHook} from '@/components/ReactComponentHooks';

//@withHook
class MyCmp exnted React.Component {

    render(){
        const [value, setState] = useState(false);
        const context = useContext(ContextAAA);
        //TODO ...
    }
}

export default withHook(MyCmp)

```

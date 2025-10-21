  import { toast } from 'react-toastify';

const notify = (type,text) => {
    if (type === "SUCCESS") {
       toast.success(text)
    } else  if (type === "ERROR"){
        toast.error(text);
    }
}

export {notify};
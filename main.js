import { getData } from "./modules/http";
import { headerReload } from ".//modules/header";
import { reload } from ".//modules/osnova"

headerReload()
getData(reload)
reload(getData)
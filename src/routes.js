import UserList from "./components/modules/userMangement/userList";
import RoleView from "./view/content/roleManagement/roleView";
import PermissionView from "./view/content/permissionMangement/permissionView";

const Routes = [
    { name: "user", component: UserList, path: ["/users","/"] },
    { name: "role", component: RoleView, path: "/role" },
    { name: "permission", component: PermissionView, path: "/permission" },

]
export default Routes;
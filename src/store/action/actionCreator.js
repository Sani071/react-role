import {
  LOGIN_USER,
  SET_ROLE_TO_USER,
  SET_PERMISSION_TO_ROLE,
  DELETE_USER,
  DELETE_ROLE,
  DELETE_PERMISSION
} from "./actionsTypes";

export const loginAction = payload => {
  return {
    type: LOGIN_USER,
    payload
  };
};

export const deleteUserAction = payload => {
  return {
    type: DELETE_USER,
    payload
  };
};

export const deleteRoleAction = payload => {
  return {
    type: DELETE_ROLE,
    payload
  };
};

export const deletePermissionAction = payload => {
  return {
    type: DELETE_PERMISSION,
    payload
  };
};

export const setRoleAction = payload => {
  return {
    type: SET_ROLE_TO_USER,
    payload
  }
}

export const setPermission2Role = payload => {
  return {
    type: SET_PERMISSION_TO_ROLE,
    payload
  }
}
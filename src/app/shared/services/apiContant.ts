export const ApiUrl = {
    getAllUsersByUserRoleAndStatus: '/users/getAllUsersByUserRoleAndStatus',
    getAllUsersNameAndComapny: '/users/getAllUsersNameAndComapny',
    countByUserRole: '/users/countByUserRole',
    getAllUserGroupByUserRoleAndStatus: '/users/group/getAllUserGroupByUserRoleAndStatus',
    findUserGroupById: '/users/group/find',
    createUserGroup: '/users/group/createUserGroup',
    updateUser: '/users/updateUser',
    createUser: '/users/createUser',
    updateUserInGroup: '/users/group/updateUserInGroup',
    getUserById: '/users/find',
    searchUserByProduct: '/users/searchUserByProduct',


    /*---------------------purchase-------------------*/
    getAllPurchaseByTypeAndStatus: '/purchase/getAllPurchaseByTypeAndStatus',
    getAllPurchaseByLotTypeAndStatus: '/purchase/getAllPurchaseByLotTypeAndStatus',
    getAllGrn: '/purchase/getAllGrn',
    updateGrnWithProduct: '/purchase/updateGrnWithProduct',
    createGrn: '/purchase/createGrn',
    createMaterialTransfer: '/purchase/createMaterialTransfer',
    createPurchase: '/purchase/createPurchase',
    updatePurchase: '/purchase/updatePurchase',
    updatePurchaseWithProduct: '/purchase/updatePurchaseWithProduct',
    updatePurchaseHistory: '/purchase/updatePurchaseHistory',
    findPurchase: '/purchase/find',
    getGrnById: '/purchase/getGrnById',
    getAllGrnByStatus: '/purchase/getAllGrnByStatus',
    getPurchaseOrderByPo: '/purchase/getPurchaseOrderByPo',
    getPurchaseOrderByUser: '/purchase/getPurchaseOrderByUser',
    savePurchaseOrder: '/purchase/savePurchaseOrder',


    /*-----------------api-Gateway--------------------*/
    changePassword: '/estelmet/changePassword',
    signup: '/estelmet/signup',
    forgetPassword: '/estelmet/forgetPassword',
    getLoggedInUser: '/estelmet/getLoggedInUser',
    logout: '/estelmet/logout',
    sendOtp: '/estelmet/common/sendOtp',
    login: '/estelmet/login',
    verifyOtp: '/estelmet/common/verifyOtp',
    resendOtp: '/estelmet/common/resendOtp',
    uploadFile: '/estelmet/uploadFile',
    getAllUsers: '/estelmet/getAllUsers',
    getAllRole: '/estelmet/getAllRole',
    changeEmployeeRole: '/estelmet/changeEmployeeRole',
    getAllDeactivatedAccount: '/estelmet/getAllDeactivatedAccount',


    updateProduct: '/inventory/updateProduct',
};

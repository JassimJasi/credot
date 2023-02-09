export const storeData = (payload) => ({
  type: "SINGLE_PRODUCT",
  payload: { ...payload },
});
export const clearData = () => ({
  type: "CLEAR_DATA",
});

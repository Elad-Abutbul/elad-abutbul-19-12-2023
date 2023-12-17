import { enqueueSnackbar } from "notistack";

export const weatherApi = async (locationKey, service) => {
  try {
    const res = await service(locationKey);
    return res.data;
  } catch (error: any) {
    enqueueSnackbar(error.message, { variant: "error" });
  }
};

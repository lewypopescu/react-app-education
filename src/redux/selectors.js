export const selectTutors = (state) => state.tutorsSlice.items;
export const selectTutorsError = (state) => state.tutorsSlice.error;
export const selectTutorsLoading = (state) => state.tutorsSlice.isLoading;

export const selectFaculties = (state) => state.facultiesSlice.items;
export const selectFacultiesError = (state) => state.facultiesSlice.error;
export const selectFacultiesLoading = (state) => state.facultiesSlice.isLoading;

export const selectTutors = state => state.tutorsSlice.items;
export const selectTutorsError = state => state.tutorsSlice.error;
export const selectTutorsLoading = state => state.tutorsSlice.isLoading;

export const selectUniversities = state => state.universitiesSlice.items;
export const selectUniversitiesError = state => state.universitiesSlice.error;
export const selectUniversitiesLoading = state =>
  state.universitiesSlice.isLoading;

import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: "",
  token: "",
  loading: false,
  error: false,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    fetchStart: (state) => { // ilk olarak fetch startı yazarak istek ilk başlarken fetch start() fonksiyonu çalıştırılacak. useApiRequest e bak. 
      state.loading = true
    },
    loginSuccess: (state, { payload }) => { // sonra sırasıyla her işlem için login başarılı olduğunda logout olduğun da her işlem için kendi action creator fonksiyonumuzu yazıuyoruz.
      state.loading = false
      state.user = payload.user.username // burada baştaki initial state e yani state.user 'a payload la bize gelen payload.user.username bilgisini atıyoruz. yani login request attığımzda payload ile bu sağ tarafa yazdığımız bilgiler geliyor. 
      state.token = payload.token
    },
    //? Register işlemi için ayrı bir action creator fonksiyonun yazılması
    //? Register ile Login arasında bazı farklılıklar olduğu için ayrı bir fonksiyon yazıldı.
    registerSuccess: (state, { payload }) => {
      state.loading = false
      state.user = payload.data.username //register olduğunda apiden gelen veri farkı olduğu için payload.data.username şeklinde yazdık. 
      state.token = payload.token 
    },
    logoutSuccess: (state) => {
      state.loading = false
      state.user = ""
      state.token = ""
    },
    fetchFail: (state) => {
      state.loading = false
      state.error = true
    },
  },
})

export const {
  fetchStart,
  loginSuccess,
  fetchFail,
  registerSuccess,
  logoutSuccess,
} = authSlice.actions
export default authSlice.reducer

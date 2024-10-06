<script>
import { AuthService, LocalAuthService } from "../services/Auth";

export default {
  name: "Login",
  data: function () {
    return {
      title: "LOGIN",
      userDetails: {
        username: '',
        password: '',
      },
      error: null,
    };
  },
  methods: {
    login(e) {

      e.preventDefault();

      let email = e.target.elements.email.value;
      let password = e.target.elements.password.value;


      AuthService.setStrategy(LocalAuthService)

      let response = AuthService.login({ username: email, password: password }).then((res) => {
        console.log('res', res)

          this.$router.replace("todo");
      })
        .catch((err) => {
          this.error = err;
          console.log('err', err)
        });

    },
    // showNotification(msg, alertType) {
    //   this.$notify({
    //     group: "foo",
    //     text: `<div class="alert ${alertType}" role="alert">${msg}</div> `,
    //     position: "top left",
    //     duration: 10000
    //   });
    // },
    // sendDataToStore(user) {
    //   let data = {
    //     uid: user.uid,
    //     name: user.displayName,
    //     profileImage: user.photoURL,
    //     email: user.email
    //   }
    //   // vueStore
    //   //   .dispatch("saveUserData", data)
    //   //   .then(something => {
    //   //     console.log("done");
    //   //   })
    //   //   .catch(error => {
    //   //     console.log("err");
    //   //   });
    // },
    // googleLogin() {
    //   let that = this;
    //   // var provider = new firebase.auth.GoogleAuthProvider();
    //   // firebase
    //   //   .auth()
    //   //   .signInWithPopup(provider)
    //   //   .then(function (result) {
    //   //     // This gives you a Google Access Token. You can use it to access the Google API.
    //   //     var token = result.credential.accessToken;
    //   //     // The signed-in user info.
    //   //     var user = result.user;
    //   //     console.log(user);
    //   //     that.$notify({
    //   //       group: "foo",
    //   //       text: `<div class="alert alert-success" role="alert">
    //   //                       <p> Welcome ${user.displayName}</p> 
    //   //               You are logged in as ${user.email}
    //   //           </div> `,

    //   //       position: "top left",
    //   //       duration: 10000
    //   //     });
    //   //     that.sendDataToStore(user);
    //   //     that.$router.replace("todo");
    //   //     // ...
    //   //   })
    //   //   .catch(function (error) {
    //   //     console.log(error);
    //   //     // Handle Errors here.
    //   //     var errorCode = error.code;
    //   //     var errorMessage = error.message;
    //   //     // The email of the user's account used.
    //   //     var email = error.email;
    //   //     // The firebase.auth.AuthCredential type that was used.
    //   //     var credential = error.credential;
    //   //     that.showNotification(errorMessage, "alert-danger");
    //   //   });
    // }
  }
};
</script>

<template>
  <div>
    <section class="section pb-0 bg-gradient-info main-section">
      <div class="container">
        <div class="row row-grid align-items-center">
          <div class="col-md-6 order-lg-2 ml-lg-auto">
            <div class="position-relative pl-md-5">
              <!-- <img src="assets/img/ill-2.svg" class="img-center img-fluid" /> -->
            </div>
          </div>
          <div class="col-lg-6 order-lg-1 mt-0">
            <div class="card bg-gradient-secondary shadow shadow-lg--hover mt-5">
              <form class="card-body p-lg-5" @submit="login($event)">
                <h4 class="mb-1">{{ title }}</h4>
                <p class="mt-0">To access some of the coolest & awesome projects.</p>
                <div class="form-group mt-5">
                  <div class="input-group input-group-alternative">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="ni ni-user-run"></i>
                      </span>
                    </div>
                    <input class="form-control" placeholder="Your Email address" name="email" type="email" />
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group input-group-alternative">
                    <div class="input-group-prepend">
                      <span class="input-group-text">
                        <i class="ni ni-email-83"></i>
                      </span>
                    </div>
                    <input class="form-control" placeholder="Your Password" name="password" type="password" />
                  </div>
                </div>
                <div>
                  <button type="submit" class="btn btn-success btn-round btn-block btn-lg">Login1 </button>
                  <p class="text-center my-2">OR</p>
                  <div class="row d-flex align-items-center">

                    <div class="col-md-6">
                      <router-link to="/register" class="register-link">
                        <span class="nav-link-inner--text">New Registeration?</span>
                      </router-link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <notifications group="foo" position="top right" class="my-style" width="400" />
  </div>
</template>


<style scoped>
section.main-section {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.section {
  padding-top: 0;
}

.google-img-wrapper {
  cursor: pointer;
}

.google-signin-img {
  width: 175px;
}
</style>

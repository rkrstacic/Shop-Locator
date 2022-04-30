<template>
    <div class="login">
        <h1 class="text-center">Login</h1>
        <div class="container mt-5">
            <div class="row">
                <div class="col-sm-2 col-md-3 col-lg-4"></div>
                <div class="col-sm-8 col-md-6 col-lg-4">
                    <div>
                        <div class="form-group">
                            <label for="exampleInputEmail1"
                                >Email address</label
                            >
                            <input
                                v-model="email"
                                type="email"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                            />
                            <small id="emailHelp" class="form-text text-muted"
                                >We'll never share your email with anyone
                                else.</small
                            >
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input
                                v-model="password"
                                type="password"
                                class="form-control"
                                id="exampleInputPassword1"
                                placeholder="Password"
                            />
                        </div>
                        <div class="mt-5">
                            <button
                                @click="login()"
                                class="btn btn-primary mr-3"
                            >
                                Log in
                            </button>
                            <router-link to="/register">Register</router-link>
                        </div>
                    </div>
                </div>
                <div class="col-sm-2 col-md-3 col-lg-4"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "@/firebase";

export default {
    name: "login",
    data() {
        return {
            email: "test@gmail.com",
            password: "password",
        };
    },

    methods: {
        login() {
            const auth = getAuth();
            signInWithEmailAndPassword(auth, this.email, this.password)
                .then((userCredential) => {
                    // Signed in
                    console.log("Prijava uspijesna");
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(
                        `Prijava neuspijesna; errorCode: ${errorCode}; errorMessage: ${errorMessage}`
                    );
                });
        },
    },
};
</script>

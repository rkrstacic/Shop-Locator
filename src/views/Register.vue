<template>
    <div class="register">
        <h1>Register</h1>
        <div class="container">
            <div class="row mt-5">
                <div class="col-sm-2 col-md-3 col-lg-4"></div>
                <div class="col-sm-8 col-md-6 col-lg-4">
                    <form>
                        <div class="form-group">
                            <label for="emailField">Email address</label>
                            <input type="email" v-model="username" class="form-control" id="emailField" aria-describedby="emailHelp" placeholder="Enter email">
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="passwordField">Password</label>
                            <input type="password" v-model="password" class="form-control" id="passwordField" placeholder="Password">
                        </div>
                        <div class="form-group">
                            <label for="confirmPasswordField">Confirm Password</label>
                            <input type="password" v-model="passwordRepeat" class="form-control" id="confirmPasswordField" placeholder="Confirm password">
                        </div>
                        <button type="submit" class="btn btn-primary mt-5">Submit</button>
                    </form>
                </div>
                <div class="col-sm-2 col-md-3 col-lg-4"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Register",
    data() {
        return {
            username: "", 
            password: "",
            passwordRepeat: ""
        }
    }
}
</script>
